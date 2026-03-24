# CSS

> Se o HTML é o esqueleto da página, o CSS é a roupa, a maquiagem e o estilo. Ele transforma estrutura em design.

## O que é CSS?

CSS significa **Cascading Style Sheets** (Folhas de Estilo em Cascata). É a linguagem que **controla a aparência** de tudo na página: cores, tamanhos, posições, animações e layout.

## Para que serve?

- Definir cores, fontes e tamanhos de texto
- Criar layouts (posicionar elementos na tela)
- Fazer sites responsivos (funcionar em celular e desktop)
- Adicionar animações e transições
- Personalizar a aparência de formulários e botões

## Principais características

- **Cascata:** estilos são aplicados em cascata — o que vem depois pode sobrescrever o que veio antes.
- **Herança:** elementos filhos herdam propriedades dos pais (como cor e fonte).
- **Especificidade:** quando há conflito de regras, o seletor mais específico vence.
- **Box Model:** todo elemento é uma caixa com `margin`, `border`, `padding` e `content`.
- **Flexbox e Grid:** sistemas modernos de layout para posicionar elementos com facilidade.
- **Media Queries:** permitem aplicar estilos diferentes conforme o tamanho da tela (responsividade).
- **Variáveis CSS (Custom Properties):** reutilização de valores como cores e tamanhos.
- **Animações e transições:** efeitos visuais sem precisar de JavaScript.

## Como instalar

CSS **não precisa de instalação**. Basta criar um arquivo `.css` e vinculá-lo ao HTML.

**O que você precisa:**

1. **VS Code** — editor recomendado ([code.visualstudio.com](https://code.visualstudio.com/))
2. **Extensão Live Server** — para ver as mudanças em tempo real
3. Um arquivo `.html` e um arquivo `.css` na mesma pasta

**Estrutura mínima:**

```
projeto/
├── index.html
└── style.css
```

**Vincular o CSS ao HTML:**

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

## Conceitos Fundamentais

### Como Aplicar CSS

Existem 3 formas de usar CSS:

**1. Inline (no próprio elemento) — evite quando possível:**
```html
<p style="color: red; font-size: 18px;">Texto vermelho</p>
```

**2. Interno (dentro do `<head>`):**
```html
<head>
    <style>
        p {
            color: red;
            font-size: 18px;
        }
    </style>
</head>
```

**3. Externo (arquivo separado) — recomendado:**
```html
<!-- No HTML -->
<link rel="stylesheet" href="estilo.css" />
```

```css
/* No arquivo estilo.css */
p {
    color: red;
    font-size: 18px;
}
```

### Seletores

Seletores definem **quais elementos** serão estilizados.

```css
/* Seleciona TODAS as tags p */
p {
    color: blue;
}

/* Seleciona pelo ID (único na página) */
#titulo-principal {
    font-size: 32px;
}

/* Seleciona pela classe (reutilizável) */
.destaque {
    background-color: yellow;
}

/* Seleciona elemento dentro de outro */
nav a {
    text-decoration: none;
}

/* Seleciona múltiplos elementos */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```

#### Resumo dos Seletores Básicos

| Seletor | Exemplo | Seleciona |
|---|---|---|
| Tag | `p` | Todos os `<p>` |
| Classe | `.card` | Todos com `class="card"` |
| ID | `#menu` | O elemento com `id="menu"` |
| Descendente | `div p` | `<p>` dentro de `<div>` |
| Filho direto | `div > p` | `<p>` filho direto de `<div>` |

### Propriedades de Texto

```css
.texto-estilizado {
    color: #333333;              /* cor do texto */
    font-size: 16px;             /* tamanho */
    font-family: 'Arial', sans-serif; /* fonte */
    font-weight: bold;           /* negrito: normal, bold, 100-900 */
    text-align: center;          /* alinhamento: left, center, right */
    text-decoration: underline;  /* sublinhado, line-through, none */
    line-height: 1.6;            /* espaço entre linhas */
    letter-spacing: 2px;         /* espaço entre letras */
}
```

### Cores

CSS aceita cores em vários formatos:

```css
.cores {
    color: red;                    /* nome da cor */
    color: #ff0000;                /* hexadecimal */
    color: rgb(255, 0, 0);        /* RGB */
    color: rgba(255, 0, 0, 0.5);  /* RGB com transparência */
    color: hsl(0, 100%, 50%);     /* HSL */
}
```

### Box Model

Todo elemento HTML é uma **caixa** com 4 camadas:

```
┌─────────────── margin (espaço externo) ───────────────┐
│  ┌──────────── border (borda) ────────────┐           │
│  │  ┌──────── padding (espaço interno) ──┐│           │
│  │  │                                     ││           │
│  │  │         CONTEÚDO                    ││           │
│  │  │                                     ││           │
│  │  └─────────────────────────────────────┘│           │
│  └─────────────────────────────────────────┘           │
└────────────────────────────────────────────────────────┘
```

```css
.caixa {
    width: 300px;
    height: 200px;
    padding: 20px;       /* espaço interno */
    border: 2px solid #000; /* borda */
    margin: 10px;        /* espaço externo */
    box-sizing: border-box; /* padding e border incluídos no width */
}
```

### Display

A propriedade `display` controla como o elemento se comporta no layout:

```css
.bloco { display: block; }       /* ocupa toda a largura */
.linha { display: inline; }      /* ocupa só o espaço do conteúdo */
.ambos { display: inline-block; } /* inline mas aceita width/height */
.oculto { display: none; }       /* esconde o elemento */
```

### Flexbox

Flexbox é o sistema moderno para criar **layouts em uma dimensão** (linha ou coluna).

```css
.container {
    display: flex;
    justify-content: center;   /* alinha horizontalmente */
    align-items: center;       /* alinha verticalmente */
    gap: 16px;                 /* espaço entre itens */
}
```

#### Propriedades do Container

| Propriedade | Valores comuns | Função |
|---|---|---|
| `flex-direction` | `row`, `column` | Direção dos itens |
| `justify-content` | `center`, `space-between`, `flex-start` | Alinhamento no eixo principal |
| `align-items` | `center`, `flex-start`, `stretch` | Alinhamento no eixo cruzado |
| `flex-wrap` | `wrap`, `nowrap` | Quebra de linha |
| `gap` | `16px`, `1rem` | Espaço entre itens |

#### Exemplo prático: Centralizando na tela

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

### Grid

CSS Grid é para layouts em **duas dimensões** (linhas e colunas).

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 colunas iguais */
    grid-template-rows: auto;
    gap: 20px;
}

/* Layout de página clássico */
.pagina {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar conteudo"
        "footer footer";
    min-height: 100vh;
}

.header   { grid-area: header; }
.sidebar  { grid-area: sidebar; }
.conteudo { grid-area: conteudo; }
.footer   { grid-area: footer; }
```

### Responsividade com Media Queries

Media queries permitem aplicar estilos **dependendo do tamanho da tela**:

```css
/* Mobile first: estilo base para celular */
.container {
    display: flex;
    flex-direction: column;
    padding: 16px;
}

/* Tablet (768px ou mais) */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        padding: 24px;
    }
}

/* Desktop (1024px ou mais) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px;
    }
}
```

### Unidades de Medida

| Unidade | Tipo | Exemplo | Quando usar |
|---|---|---|---|
| `px` | Fixa | `16px` | Bordas, detalhes fixos |
| `rem` | Relativa (root) | `1.5rem` | Fontes e espaçamentos |
| `em` | Relativa (pai) | `2em` | Tamanhos proporcionais |
| `%` | Relativa | `50%` | Larguras fluidas |
| `vw/vh` | Viewport | `100vh` | Tela inteira |
| `fr` | Fração (Grid) | `1fr` | Distribuir espaço no Grid |

### Transições e Animações

```css
/* Transição suave */
.botao {
    background: #3b82f6;
    transition: background 0.3s ease, transform 0.2s ease;
}
.botao:hover {
    background: #2563eb;
    transform: scale(1.05);
}

/* Animação personalizada */
@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card {
    animation: aparecer 0.5s ease forwards;
}
```

## Dicas Importantes

1. **Use `box-sizing: border-box`** em tudo — adicione `* { box-sizing: border-box; }` no início.
2. **Mobile First** — Comece estilizando para celular e vá adicionando estilos para telas maiores.
3. **Evite IDs para estilo** — Prefira classes, que são reutilizáveis.
4. **Use variáveis CSS** — Defina cores e valores em `:root { --cor-primaria: #3b82f6; }`.
5. **Flexbox para 1D, Grid para 2D** — Não tente forçar um quando o outro é melhor.
6. **Inspecione no navegador** — Use F12 para ver e testar estilos ao vivo.

## Exercícios

### Exercício 1 — Estilizar Texto
**Nível:** Fácil
**Enunciado:** Crie uma página com um h1 (cor azul, centralizado), um parágrafo (cinza, font-size 18px) e aplique uma fonte do Google Fonts.
**Dica:** Use `<link>` para importar a fonte do Google Fonts e aplique com `font-family`.

### Exercício 2 — Card de Perfil
**Nível:** Fácil
**Enunciado:** Crie um card com foto (circular), nome e descrição. O card deve ter borda arredondada e sombra.
**Dica:** Use `border-radius: 50%` na imagem e `box-shadow` no card.

### Exercício 3 — Menu Horizontal
**Nível:** Fácil
**Enunciado:** Crie um menu de navegação horizontal com 4 links. Os links mudam de cor ao passar o mouse.
**Dica:** Use Flexbox no `<nav>` e `:hover` nos links.

### Exercício 4 — Layout com Flexbox
**Nível:** Médio
**Enunciado:** Crie um layout com header, 3 cards lado a lado e footer. Os cards devem se empilhar em telas pequenas.
**Dica:** Use `flex-wrap: wrap` e media queries para a responsividade.

### Exercício 5 — Galeria de Imagens
**Nível:** Médio
**Enunciado:** Crie uma galeria com 6 imagens usando CSS Grid. Desktop: 3 colunas. Tablet: 2 colunas. Mobile: 1 coluna.
**Dica:** Use `grid-template-columns` com media queries.

### Exercício 6 — Botões Animados
**Nível:** Médio
**Enunciado:** Crie 3 botões com estilos diferentes. Cada um deve ter uma animação hover diferente (escala, cor gradual, sombra).
**Dica:** Use `transition` com propriedades diferentes em cada botão.

### Exercício 7 — Layout de Página Completa
**Nível:** Médio
**Enunciado:** Recrie um layout com sidebar fixa à esquerda (250px), conteúdo principal e footer usando CSS Grid.
**Dica:** Use `grid-template-areas` e `min-height: 100vh`.

### Exercício 8 — Formulário Estilizado
**Nível:** Desafio
**Enunciado:** Estilize um formulário de login com inputs arredondados, foco com borda colorida, botão com gradiente e transição hover.
**Dica:** Use `:focus` para o estilo de foco e `linear-gradient` no botão.

### Exercício 9 — Página Responsiva Completa
**Nível:** Desafio
**Enunciado:** Crie uma landing page responsiva com: hero section (imagem de fundo + texto), seção de features com cards, e footer. Deve funcionar em 3 breakpoints.
**Dica:** Combine Flexbox, Grid, media queries e variáveis CSS.

### Exercício 10 — Animação de Loading
**Nível:** Desafio
**Enunciado:** Crie uma animação de carregamento (spinner ou barra de progresso) usando apenas CSS, sem JavaScript.
**Dica:** Use `@keyframes` com `transform: rotate()` ou `width` animado.

## Recursos Adicionais

- [MDN Web Docs — CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) — Referência oficial
- [Flexbox Froggy](https://flexboxfroggy.com/) — Jogo para aprender Flexbox
- [Grid Garden](https://cssgridgarden.com/) — Jogo para aprender Grid
- [CSS Tricks](https://css-tricks.com/) — Dicas e tutoriais avançados
