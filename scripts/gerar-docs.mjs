// Gera a documentação versionada a partir do projeto WIKI exportado do QAllor (docs/qalor/wiki.qalor.json):
//   testes-funcionais/NN-modulo.md  · casos de teste por módulo, com passos e resultado esperado
//   docs/defeitos/WIKI-DF-N.md       · ficha de cada defeito
//   docs/casos-de-teste.csv e docs/defeitos.csv (UTF-8 com BOM, separador ;)
// Uso (na raiz): node scripts/gerar-docs.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';

const raiz = new URL('../', import.meta.url);
const bundle = JSON.parse(readFileSync(new URL('docs/qalor/wiki.qalor.json', raiz), 'utf8'));
const proj = bundle.projects[0];
const KEY = proj.key;
const docs = proj.docs;
const porRef = new Map(docs.map((d) => [d.ref, d]));

// mesma numeração do QAllor: contador por tipo, na ordem do pacote
const chave = new Map();
const cont = {};
const PREFIXO = { case: 'TC', defect: 'DF', requirement: 'RQ', risk: 'RK' };
for (const d of docs) if (PREFIXO[d.type]) chave.set(d.ref, `${KEY}-${PREFIXO[d.type]}-${(cont[d.type] = (cont[d.type] ?? 0) + 1)}`);

const PRIORIDADE = { critical: 'Crítica', high: 'Alta', medium: 'Média', low: 'Baixa' };
const SEVERIDADE = { blocker: 'Bloqueante', critical: 'Crítica', major: 'Grave', minor: 'Leve', trivial: 'Trivial' };
const casos = docs.filter((d) => d.type === 'case');
const defeitos = docs.filter((d) => d.type === 'defect');
const defeitoDoCaso = new Map();
for (const d of defeitos) for (const c of d.data.cases ?? []) defeitoDoCaso.set(c, d);
const lista = (xs) => (xs ?? []).filter(Boolean);
const csv = (linhas) => '﻿' + linhas.map((l) => l.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(';')).join('\r\n') + '\r\n';
const passosTexto = (c) => lista(c.data.steps).map((s, i) => `${i + 1}. ${s.action}${s.data ? ` [${s.data}]` : ''} => ${s.expected}`).join('\n');

// ---------- casos por módulo ----------
const dirCasos = new URL('testes-funcionais/', raiz);
mkdirSync(dirCasos, { recursive: true });
for (const f of readdirSync(dirCasos)) if (/^\d\d-.*\.md$/.test(f)) writeFileSync(new URL(f, dirCasos), ''); // limpa versões antigas
const indice = [];
proj.folders.filter((f) => f.type === 'case').forEach((pasta, i) => {
  const doModulo = casos.filter((c) => c.folderRef === pasta.ref);
  const arquivo = `${String(i + 1).padStart(2, '0')}-${pasta.name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.md`;
  const md = [`# ${pasta.name}`, '', `${doModulo.length} casos de teste, candidatos à automação com Playwright.`, ''];
  for (const c of doModulo) {
    const df = defeitoDoCaso.get(c.ref);
    md.push(`## ${chave.get(c.ref)} · ${c.title}`, '');
    md.push(`| Prioridade | Requisito | Regressão | Defeito |`, `|---|---|---|---|`);
    md.push(`| ${PRIORIDADE[c.data.priority] ?? '—'} | ${lista(c.data.basis).map((r) => chave.get(r)).join(', ') || '—'} | ${c.data.regression === 'yes' ? 'Sim' : 'Não'} | ${df ? `[${chave.get(df.ref)}](../docs/defeitos/${chave.get(df.ref)}.md)` : '—'} |`, '');
    if (c.data.objective) md.push(`**Objetivo:** ${c.data.objective}`, '');
    if (lista(c.data.preconditions).length) md.push(`**Dado** ${lista(c.data.preconditions).join(' **e** ')}`, '');
    md.push('| # | Ação | Dados | Resultado esperado |', '|---|---|---|---|');
    lista(c.data.steps).forEach((s, k) => md.push(`| ${k + 1} | ${s.action} | ${s.data ? `\`${s.data}\`` : ''} | ${s.expected} |`));
    md.push('');
  }
  writeFileSync(new URL(arquivo, dirCasos), md.join('\n'));
  indice.push([arquivo, pasta.name, doModulo.map((c) => chave.get(c.ref).replace(`${KEY}-`, '')).join(', ')]);
});
writeFileSync(new URL('README.md', dirCasos), [
  '# Testes funcionais', '', `Os ${casos.length} casos de teste da Wikipédia, gerados do QAllor por \`scripts/gerar-docs.mjs\`.`, '',
  '| Arquivo | Módulo | Casos |', '|---|---|---|', ...indice.map(([a, n, c]) => `| [${a}](${a}) | ${n} | ${c} |`), '',
].join('\n'));

// ---------- defeitos ----------
const dirDf = new URL('docs/defeitos/', raiz);
if (defeitos.length) mkdirSync(dirDf, { recursive: true });
for (const d of defeitos) {
  const k = chave.get(d.ref);
  writeFileSync(new URL(`${k}.md`, dirDf), [
    `# ${k} · ${d.title}`, '',
    '| Severidade | Prioridade | Status | Plataforma | Caso |', '|---|---|---|---|---|',
    `| ${SEVERIDADE[d.data.severity] ?? d.data.severity} | ${PRIORIDADE[d.data.priority] ?? d.data.priority} | Novo (projeto de estudo: não será corrigido) | ${d.data.platform ?? '—'} | ${lista(d.data.cases).map((c) => chave.get(c)).join(', ')} |`, '',
    '## Passos para reproduzir', '', ...lista(d.data.steps).map((s, i) => `${i + 1}. ${s}`), '',
    '## Resultado esperado', '', d.data.expected, '', '## Resultado obtido', '', d.data.actual, '',
    '## Evidência', '', ...lista(d.data.evidence).map((e) => `- ${e}`), '',
  ].join('\n'));
}

// ---------- planilhas ----------
writeFileSync(new URL('docs/casos-de-teste.csv', raiz), csv([
  ['ID', 'Módulo', 'Título', 'Prioridade', 'Requisito', 'Pré-condições', 'Passos', 'Defeito'],
  ...casos.map((c) => [chave.get(c.ref), proj.folders.find((f) => f.ref === c.folderRef)?.name, c.title, PRIORIDADE[c.data.priority], lista(c.data.basis).map((r) => chave.get(r)).join(', '),
    lista(c.data.preconditions).join('; '), passosTexto(c), defeitoDoCaso.get(c.ref) ? chave.get(defeitoDoCaso.get(c.ref).ref) : '']),
]));
if (defeitos.length) writeFileSync(new URL('docs/defeitos.csv', raiz), csv([
  ['ID', 'Título', 'Severidade', 'Prioridade', 'Caso', 'Passos', 'Esperado', 'Obtido'],
  ...defeitos.map((d) => [chave.get(d.ref), d.title, SEVERIDADE[d.data.severity], PRIORIDADE[d.data.priority], lista(d.data.cases).map((c) => chave.get(c)).join(', '),
    lista(d.data.steps).join('\n'), d.data.expected, d.data.actual]),
]));
console.log(`${casos.length} casos em ${indice.length} módulos, ${defeitos.length} defeitos.`);
if (porRef.size !== docs.length) throw new Error('refs duplicadas no pacote');
