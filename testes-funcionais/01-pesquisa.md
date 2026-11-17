# Pesquisa

8 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-1 · Validar a página principal pronta para pesquisar

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-1 | Sim | — |

**Objetivo:** A página principal deve abrir com o campo de pesquisa.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor acessa a página principal | `https://pt.wikipedia.org` | o sistema exibe o logotipo da Wikipédia e o campo "Pesquisar na Wikipédia" |

## WIKI-TC-2 · Validar pesquisa por título exato abrindo o artigo direto

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Crítica | WIKI-RQ-1 | Sim | — |

**Objetivo:** Título exato deve levar direto ao artigo, sem lista de resultados.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor digita o termo na pesquisa e pressiona Enter | `Brasil` | o sistema abre /wiki/Brasil com o título "Brasil" no topo |

## WIKI-TC-3 · Validar sugestões de artigos ao digitar

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-1 | Sim | — |

**Objetivo:** O autocompletar deve sugerir artigos e abrir o escolhido.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor digita parte do termo na pesquisa | `Santos Dum` | o sistema lista sugestões e a primeira é "Santos Dumont", com uma descrição curta |
| 2 | o leitor clica na sugestão "Santos Dumont" |  | o sistema abre o artigo "Santos Dumont" |

## WIKI-TC-4 · Validar pesquisa sem acento chegando ao artigo acentuado

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-1 | Sim | — |

**Objetivo:** A falta de acento não deve impedir o leitor de chegar ao artigo.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor pesquisa o termo sem acento e pressiona Enter | `sao paulo` | o sistema abre o artigo "São Paulo" (a cidade), com nota apontando para o estado e outros usos |

## WIKI-TC-5 · Validar pesquisa sem artigo correspondente

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-1 | Sim | — |

**Objetivo:** Partição inválida: termo que não existe em nenhum artigo.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor pesquisa um termo sem sentido e pressiona Enter | `xptoqa123zzz` | o sistema abre Especial:Pesquisar com a mensagem "A pesquisa não produziu resultados." |

## WIKI-TC-6 · Validar pesquisa com o campo vazio

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-1 | Sim | — |

**Objetivo:** Pesquisa vazia não deve gerar erro.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor pressiona Enter com o campo de pesquisa vazio |  | o sistema abre a página "Busca" (Especial:Pesquisar) sem resultados e sem erro |

## WIKI-TC-7 · Validar pesquisa com caracteres especiais

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-1 | Sim | — |

**Objetivo:** Caracteres de HTML na pesquisa não podem quebrar a página nem ser executados.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor pesquisa um texto com marcação HTML e pressiona Enter | `<script>alert(1)</script>` | o sistema mostra a página de resultados com o texto escrito literalmente, sem abrir alerta e sem erro |

## WIKI-TC-8 · Validar pesquisa sem diferenciar maiúsculas e minúsculas

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-1 | Sim | — |

**Objetivo:** Termo todo em minúsculas deve chegar ao mesmo artigo.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor pesquisa o termo em minúsculas e pressiona Enter | `brasília` | o sistema abre o artigo "Brasília" |
