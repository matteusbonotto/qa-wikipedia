# Aparência

5 casos de teste, candidatos à automação com Playwright.

## WIKI-TC-25 · Validar opções do menu Aparência

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-5 | Sim | — |

**Objetivo:** O menu deve oferecer as três preferências de leitura.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor abre o menu Aparência |  | o sistema mostra Texto (Pequeno, Padrão, Grande), Largura (Padrão, Largo) e Cor (Automático, Claro, Escuro) |

## WIKI-TC-26 · Validar texto Grande aumentando a fonte

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-5 | Sim | — |

**Objetivo:** A escolha deve mudar o texto na hora.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil) **e** que o texto está em "Padrão"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor escolhe Texto "Grande" |  | o sistema aumenta a fonte do corpo do artigo (de 16 px para 20 px) sem recarregar a página |
| 2 | o leitor escolhe Texto "Pequeno" |  | o sistema diminui a fonte para menos que o tamanho Padrão |

## WIKI-TC-27 · Validar largura Larga ocupando a tela

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | WIKI-RQ-5 | Sim | — |

**Objetivo:** Largura Larga deve usar a tela toda em monitores grandes.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil) **e** que a janela tem 1280 px de largura

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor escolhe Largura "Largo" |  | o sistema expande o conteúdo para a largura da janela |

## WIKI-TC-28 · Validar tema Escuro

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-5 | Sim | — |

**Objetivo:** O tema escuro deve trocar fundo e texto sem esconder conteúdo.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor escolhe Cor "Escuro" |  | o sistema troca para fundo escuro e texto claro; links e tabelas continuam legíveis |

## WIKI-TC-29 · Validar preferências mantidas depois de recarregar

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | WIKI-RQ-5 | Sim | — |

**Objetivo:** A preferência não pode se perder ao trocar de página.

**Dado** que o leitor está no artigo "Brasil" (https://pt.wikipedia.org/wiki/Brasil)

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o leitor escolhe Texto "Grande" e Cor "Escuro" |  | o sistema aplica as duas escolhas |
| 2 | o leitor recarrega a página e abre outro artigo | `/wiki/Brasília` | o sistema mantém texto Grande e tema Escuro |
