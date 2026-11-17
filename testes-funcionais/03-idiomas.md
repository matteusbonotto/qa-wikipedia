# Idiomas

4 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-17 · Validar botão de idiomas com a quantidade disponível

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-3 | Sim | — |

**Objetivo:** O botão deve informar quantos idiomas existem.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor confere o botão de idiomas no topo do artigo |  | o sistema mostra o botão com o total de idiomas, por exemplo "304 idiomas" |
| 2 | o leitor clica no botão |  | o sistema abre a lista de idiomas com campo de busca |

## WIKI-TC-18 · Validar troca do artigo para inglês

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-3 | Sim | — |

**Objetivo:** Escolher English abre o mesmo assunto na Wikipédia em inglês.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre a lista de idiomas e escolhe "English" |  | o sistema abre https://en.wikipedia.org/wiki/Brazil |

## WIKI-TC-19 · Validar busca dentro da lista de idiomas

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-3 | Sim | — |

**Objetivo:** Com centenas de idiomas, o leitor precisa filtrar.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre a lista de idiomas e digita no campo de busca da lista | `Españ` | o sistema filtra a lista e mostra "Español" |
| 2 | o leitor escolhe "Español" |  | o sistema abre o artigo na Wikipédia em espanhol |

## WIKI-TC-20 · Validar artigo que só existe em português

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-3 | Sim | — |

**Objetivo:** Partição: artigo sem versão em outro idioma.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre um artigo sem outras versões (escolhido em Especial:Páginas sem interwikis) |  | o botão de idiomas mostra que não há outros idiomas ou oferece adicionar link, sem erro |
