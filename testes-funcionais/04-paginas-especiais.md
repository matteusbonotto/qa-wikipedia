# Páginas especiais

4 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-21 · Validar artigo aleatório diferente a cada acesso

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-4 | Sim | — |

**Objetivo:** Especial:Aleatória deve sortear artigos.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor acessa Especial:Aleatória | `/wiki/Especial:Aleatória` | o sistema abre um artigo qualquer |
| 2 | o leitor acessa Especial:Aleatória de novo |  | o sistema abre um artigo diferente do anterior |

## WIKI-TC-22 · Validar histórico de edições do artigo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-4 | Sim | — |

**Objetivo:** O histórico mostra quem mudou o quê e quando.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor clica em "Ver histórico" |  | o sistema lista as edições, 50 por página, cada uma com data, hora, autor, tamanho e diferença em bytes |
| 2 | o leitor clica em "anterior" na primeira linha |  | o sistema mostra a comparação (diff) entre as duas versões |

## WIKI-TC-23 · Validar artigo que não existe

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-4 | Sim | — |

**Objetivo:** Endereço inexistente deve responder 404 e ajudar o leitor.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor acessa um endereço de artigo que não existe | `/wiki/ArtigoQueNaoExisteQA123` | o sistema responde HTTP 404 e oferece procurar o termo na Wikipédia e nos projetos irmãos (Wikicionário, Wikilivros, Wikiquote) |

## WIKI-TC-24 · Validar ferramenta "Citar esta página"

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-4 | Sim | — |

**Objetivo:** Leitores usam a Wikipédia como fonte e precisam da citação.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre o menu Ferramentas e clica em "Citar esta página" |  | o sistema abre Especial:Citar com o artigo "Brasil" e formatos de citação, como ABNT |
