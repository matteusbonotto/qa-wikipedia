<div align="center">

# 🧪 QA · Wikipédia (site)

**Ciclo de teste completo da Wikipédia em português, do plano ao relatório de conclusão.**
Plano, casos, execução manual, defeitos e automação Playwright com CI, documentados no [QAllor](https://qallor.web.app).

![Status](https://img.shields.io/badge/status-em%20andamento-F59E0B)
![Etapa](https://img.shields.io/badge/etapa-planejamento-4F3BEF)
![ISTQB](https://img.shields.io/badge/método-ISTQB%20CTFL%204.0-1f2937)

[📄 Plano de teste](docs/plano-de-teste.pdf)

</div>

---

## 📌 Resumo

A [Wikipédia em português](https://pt.wikipedia.org) é um site real, em produção e editado por voluntários o tempo todo. O teste é feito só de leitura, sem editar nada.

O projeto segue as etapas de um ciclo de teste. Cada uma é entregue no seu dia:

| Dia | Etapa | Status |
|---|---|:-:|
| 16/11 | 🗺️ **Planejamento:** escopo, riscos, critérios de entrada e saída | ✅ |
| 17/11 | ✍️ **Análise e modelagem:** casos de teste por módulo | ⏳ |
| 18/11 | ▶️ **Execução:** ciclo manual com evidências e registro de defeitos | ⏳ |
| 19/11 | 🤖 **Automação, parte 1:** Playwright, page objects e fluxos principais | ⏳ |
| 20/11 | 🔁 **Automação, parte 2 e conclusão:** CI, relatório de conclusão e resumo de qualidade | ⏳ |

## 🗺️ Planejamento

**Objetivos:** verificar os requisitos observados, encontrar defeitos, dar confiança para a regressão e reduzir os riscos mapeados.

### Escopo

| Dentro | Fora |
|---|---|
| Pesquisa (exata, sugestões, sem acento, sem resultado) | Edição e publicação de artigos |
| Leitura de artigo (título, índice, cabeçalho fixo, links, referências) | Login e cadastro |
| Troca de idioma | Outras wikis (Commons, Wikcionário) |
| Artigo aleatório, histórico e artigo inexistente | API (projeto separado, semana de 23/11) |
| Menu Aparência (texto, largura e cor) | Carga e desempenho |
| Versão para celular (pt.m.wikipedia.org) | Auditoria completa de WCAG |
| Acessibilidade básica (teclado, texto alternativo, console) | |

### Base de teste

Não existe especificação pública. A base é o comportamento observado no site em 16/11/2026, escrito como 7 histórias com critérios de aceite:

| ID | Requisito | Prioridade |
|---|---|:-:|
| WIKI-RQ-1 | Pesquisa de artigos | Crítica |
| WIKI-RQ-2 | Leitura do artigo | Crítica |
| WIKI-RQ-3 | Outros idiomas | Alta |
| WIKI-RQ-4 | Páginas especiais | Média |
| WIKI-RQ-5 | Aparência da leitura | Média |
| WIKI-RQ-6 | Leitura no celular | Alta |
| WIKI-RQ-7 | Acessibilidade básica | Média |

### Riscos

| ID | Risco | Prob. | Impacto | Nível | Resposta |
|---|---|:-:|:-:|:-:|---|
| WIKI-RK-1 | Pesquisa não levar ao artigo certo | 2 | 5 | 10 | Pesquisa exata, sugestão, sem acento e sem resultado, todos no smoke |
| WIKI-RK-2 | Conteúdo dos artigos muda a qualquer momento | 5 | 2 | 10 | Testes conferem estrutura, não o texto |
| WIKI-RK-3 | Mudança do tema Vector 2022 quebrar localizadores | 3 | 3 | 9 | `getByRole` e textos visíveis; ids só quando estáveis |
| WIKI-RK-4 | Layout do celular esconder pesquisa ou conteúdo | 2 | 4 | 8 | Projeto Playwright com Pixel 7 |
| WIKI-RK-5 | Teclado ou leitor de tela não conseguir usar os menus | 2 | 4 | 8 | Casos só com teclado e checagem de texto alternativo |
| WIKI-RK-6 | Site público limitar os testes automáticos | 2 | 3 | 6 | Poucos workers, retries só no CI, trace na primeira falha |

### Critérios

| Entrada | Saída |
|---|---|
| Site no ar | 100% do smoke passando |
| Plano revisado | Todos os casos executados ao menos uma vez |
| Casos revisados antes da execução | Defeitos registrados com passos, esperado, obtido e evidência |
| | Taxa de aprovação de pelo menos 90% |

**Abordagem:** testes de sistema e aceite, funcionais e não funcionais, caixa-preta. Técnicas: partição de equivalência, transição de estados (menu Aparência), suposição de erro, checklist e exploratório.
**Ambientes:** produção, Chromium desktop 1280x720 e Pixel 7.
**Estimativa (três pontos):** otimista 6h, provável 9h, pessimista 14h → **9,3h**.

### O que mudou desde a versão de junho

Este projeto refaz o `qa-doc-testplan-wikipedia` (jun/2026). Ao revisar o site, encontrei duas mudanças:

- A página de artigo inexistente não mostra mais o texto "A Wikipédia não possui um artigo com este nome exato.". Ela responde 404 e oferece pesquisar o termo nos projetos irmãos. O critério foi reescrito.
- Apareceu o menu **Aparência** (tamanho do texto, largura e tema escuro em beta). Ele entrou no escopo como WIKI-RQ-5.

Também entraram no escopo a versão para celular e a acessibilidade básica, que o plano antigo não cobria.

## 🗂️ Estrutura

```text
qa-wikipedia/
└── docs/
    ├── plano-de-teste.pdf      📄 plano gerado no QAllor
    └── qalor/wiki.qalor.json   fonte do plano, requisitos e riscos (importável no QAllor)
```

As próximas etapas acrescentam `testes-funcionais/`, `docs/defeitos/` e `automacao/`.
