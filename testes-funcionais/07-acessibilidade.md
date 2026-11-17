# Acessibilidade

5 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-35 · Validar link "Ir para o conteúdo" no primeiro Tab

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-7 | Sim | — |

**Objetivo:** Quem usa teclado precisa pular o menu.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor pressiona Tab uma vez |  | o sistema mostra e foca o link "Ir para o conteúdo" |
| 2 | o leitor pressiona Enter |  | o foco vai para o início do conteúdo do artigo (#bodyContent) |

## WIKI-TC-36 · Validar pesquisa só com teclado

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-7 | Sim | — |

**Objetivo:** Pesquisar não pode depender do mouse.

**Dado** que o leitor acessa a Wikipédia em português sem login

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor usa Tab até o campo de pesquisa e digita o termo | `Santos Dum` | o sistema mostra as sugestões |
| 2 | o leitor usa seta para baixo e Enter |  | o sistema abre o artigo sugerido |

## WIKI-TC-37 · Validar menus Idiomas e Aparência só com teclado

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-7 | Sim | — |

**Objetivo:** Menus que só abrem com mouse excluem quem usa teclado.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor usa Tab até o botão de idiomas e pressiona Enter |  | o sistema abre a lista de idiomas e o foco vai para o filtro |
| 2 | o leitor pressiona Esc |  | o sistema fecha a lista e o foco volta ao botão |
| 3 | o leitor usa Tab até o menu Aparência e escolhe Texto "Grande" com as setas |  | o sistema aplica o texto Grande |

## WIKI-TC-38 · Validar texto alternativo das imagens do artigo

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-7 | Sim | — |

**Objetivo:** Leitor de tela depende do texto alternativo ou da legenda.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor confere cada imagem do corpo do artigo |  | toda imagem tem texto alternativo (alt) ou legenda visível; imagens decorativas são ignoradas pelo leitor de tela |

## WIKI-TC-39 · Validar foco visível ao navegar com Tab

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-7 | Sim | — |

**Objetivo:** Sem foco visível o usuário de teclado se perde.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor navega com Tab pelos 10 primeiros elementos |  | cada elemento focado tem contorno ou destaque visível |
