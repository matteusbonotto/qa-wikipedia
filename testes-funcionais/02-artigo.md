# Artigo

8 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-9 · Validar título do artigo no topo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Crítica | WIKI-RQ-2 | Sim | — |

**Objetivo:** O título é a primeira confirmação de que o leitor está no artigo certo.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor acessa o artigo | `/wiki/Brasil` | o sistema exibe "Brasil" como título principal (h1) e no título da aba |

## WIKI-TC-10 · Validar índice levando até a seção clicada

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-2 | Sim | — |

**Objetivo:** O índice deve listar as seções e navegar até elas.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor confere o índice na lateral |  | o sistema lista as seções do artigo, começando por "Início" e "Etimologia" |
| 2 | o leitor clica em "Etimologia" no índice |  | o sistema rola até a seção e o endereço termina em #Etimologia |

## WIKI-TC-11 · Validar cabeçalho fixo ao rolar o artigo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-2 | Sim | — |

**Objetivo:** Em artigos longos, título e pesquisa devem continuar à mão.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor rola a página até o meio do artigo |  | o sistema mostra no topo um cabeçalho fixo com o título "Brasil" e o botão de pesquisa |

## WIKI-TC-12 · Validar link interno abrindo outro artigo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-2 | Sim | — |

**Objetivo:** Links internos são a principal forma de navegar.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor clica em um link interno do primeiro parágrafo (texto azul) |  | o sistema abre o artigo do link, com o mesmo título do texto clicado |

## WIKI-TC-13 · Validar seção de referências

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-2 | Sim | — |

**Objetivo:** Referências permitem conferir as fontes.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor vai até o fim do artigo |  | o sistema mostra a seção "Referências" com uma lista numerada de fontes |
| 2 | o leitor clica em uma nota de rodapé no texto, por exemplo [1] |  | o sistema leva até a referência correspondente na lista |

## WIKI-TC-14 · Validar redirecionamento de nome alternativo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-2 | Sim | — |

**Objetivo:** Nomes alternativos devem levar ao artigo principal avisando o leitor.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor acessa um nome alternativo do artigo | `/wiki/Brazil` | o sistema abre /wiki/Brasil e mostra "(Redirecionado de Brazil)" abaixo do título |

## WIKI-TC-15 · Validar ampliação de imagem do artigo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-2 | Sim | — |

**Objetivo:** Imagens devem abrir em tamanho maior com a legenda.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor clica na primeira imagem do corpo do artigo |  | o sistema abre a imagem ampliada (visualizador de mídia) com legenda e opção de fechar |
| 2 | o leitor fecha o visualizador |  | o sistema volta ao artigo na mesma posição |

## WIKI-TC-16 · Validar artigo sem erros de JavaScript

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-2 | Sim | — |

**Objetivo:** Erro de script costuma quebrar menus sem aviso visível.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre o artigo com o console do navegador aberto | `/wiki/Brasil` | o console não mostra erros de JavaScript (pageerror) |
