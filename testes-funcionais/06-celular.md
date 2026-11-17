# Celular

5 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-30 · Validar artigo no celular sem rolagem lateral

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-6 | Sim | — |

**Objetivo:** Conteúdo largo demais é o defeito mais comum no celular.

**Dado** que o leitor usa um celular (Pixel 7) e acessa pt.m.wikipedia.org

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre o artigo | `/wiki/Brasil` | o sistema mostra o layout de celular e a página não rola para os lados |

## WIKI-TC-31 · Validar seções que abrem e fecham ao tocar

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-6 | Sim | — |

**Objetivo:** No celular as seções começam fechadas para encurtar a página.

**Dado** que o leitor usa um celular (Pixel 7) e acessa pt.m.wikipedia.org **e** que o artigo "Brasil" está aberto

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor confere a seção "Etimologia" |  | o sistema mostra só o título da seção, com o conteúdo fechado |
| 2 | o leitor toca no título "Etimologia" |  | o sistema abre o conteúdo da seção |
| 3 | o leitor toca no título de novo |  | o sistema fecha o conteúdo da seção |

## WIKI-TC-32 · Validar pesquisa no celular

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Alta | WIKI-RQ-6 | Sim | — |

**Objetivo:** A pesquisa precisa funcionar na tela pequena.

**Dado** que o leitor usa um celular (Pixel 7) e acessa pt.m.wikipedia.org

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor toca no ícone de pesquisa |  | o sistema abre o campo de pesquisa em tela cheia com o teclado |
| 2 | o leitor digita o termo e escolhe a primeira sugestão | `Santos Dumont` | o sistema abre o artigo "Santos Dumont" no layout de celular |

## WIKI-TC-33 · Validar menu principal no celular

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-6 | Sim | — |

**Objetivo:** O menu dá acesso a Início, Aleatório e Definições.

**Dado** que o leitor usa um celular (Pixel 7) e acessa pt.m.wikipedia.org

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor toca no botão de menu |  | o sistema abre o menu com "Início" e "Aleatório" |
| 2 | o leitor toca em "Aleatório" |  | o sistema abre um artigo aleatório |

## WIKI-TC-34 · Validar troca para a versão desktop pelo celular

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-6 | Sim | — |

**Objetivo:** O leitor pode precisar de recursos que só existem no desktop.

**Dado** que o leitor usa um celular (Pixel 7) e acessa pt.m.wikipedia.org **e** que o artigo "Brasil" está aberto

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor rola até o rodapé e toca em "Versão desktop" |  | o sistema abre o mesmo artigo no layout de desktop |
