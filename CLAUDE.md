# Tech.Dev - Site de Documentação Técnica para Iniciantes

## Visão Geral do Projeto

Site de documentação técnica/pedagógica em React que renderiza arquivos `.md` como páginas interativas. Cada página cobre uma linguagem ou tecnologia específica, com conteúdo didático voltado para alunos iniciantes em programação.

---

## Stack Tecnológica

| Tecnologia | Uso |
|---|---|
| **React 18+** | Framework principal (Vite como bundler) |
| **React Router v6** | Navegação entre páginas |
| **react-markdown** | Renderização de Markdown para JSX |
| **remark-gfm** | Suporte a GitHub Flavored Markdown (tabelas, checklists) |
| **rehype-highlight / highlight.js** | Syntax highlighting nos blocos de código |
| **Tailwind CSS v3** | Estilização utilitária |
| **Lucide React** | Ícones |

---

## Estrutura de Diretórios

```
techdev-docs/
├── claude.md                    # Este arquivo de instruções
├── public/
│   └── docs/                    # Arquivos .md de documentação
│       ├── # Projeto de Software
│       ├── aulas-de-projeto.md
│       ├── briefing-moburb.md
│       ├── moburb-requisitos.md
│       ├── moburb-caso-de-uso.md
│       ├── uml-classes.md
│       ├── arquitetura.md
│       ├── # Documentação Geral
│       ├── algoritmos.md
│       ├── html.md
│       ├── css.md
│       ├── javascript.md
│       ├── bootstrap.md
│       ├── react.md
│       ├── sql.md
│       ├── csharp.md
│       └── nodejs.md
├── src/
│   ├── main.jsx                 # Entry point
│   ├── App.jsx                  # Roteamento principal
│   ├── index.css                # Estilos globais + Tailwind
│   ├── components/
│   │   ├── Layout.jsx           # Layout com sidebar + header
│   │   ├── Sidebar.jsx          # Menu lateral de navegação
│   │   ├── DocPage.jsx          # Componente que carrega e renderiza .md
│   │   ├── CodeBlock.jsx        # Bloco de código com copy button
│   │   ├── TableOfContents.jsx  # Sumário automático baseado nos headings
│   │   └── HomePage.jsx         # Página inicial com cards das tecnologias
│   └── config/
│       └── docs.js              # Configuração das rotas e metadados dos docs
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Instruções de Setup

### 1. Criar o projeto

```bash
npm create vite@latest techdev-docs -- --template react
cd techdev-docs
```

### 2. Instalar dependências

```bash
npm install react-router-dom react-markdown remark-gfm rehype-highlight highlight.js lucide-react
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configurar Tailwind (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        surface: {
          0: '#0a0a0b',
          1: '#111113',
          2: '#18181b',
          3: '#1e1e22',
          4: '#27272a',
        }
      }
    },
  },
  plugins: [],
}
```

### 4. Configurar `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

/* Import highlight.js theme */
@import 'highlight.js/styles/github-dark.css';

/* Estilos de prosa para o Markdown renderizado */
.prose h1 { ... }
.prose h2 { ... }
/* etc - ver seção de Design */
```

---

## Configuração de Rotas (`src/config/docs.js`)

O arquivo exporta dois arrays:
- `projectDocsConfig` — 6 documentos do grupo "Projeto de Software" (cor âmbar `#f59e0b`)
- `docsConfig` — 9 documentos de tecnologias gerais

```js
// Projeto de Software (aulas-de-projeto, briefing-moburb, moburb-requisitos,
//   moburb-caso-de-uso, uml-classes, arquitetura)

export const docsConfig = [
  {
    slug: 'algoritmos',
    title: 'Algoritmos',
    description: 'Lógica de programação e pensamento computacional',
    icon: 'Brain',
    color: '#a78bfa',      // violet
    file: '/docs/algoritmos.md',
    order: 1,
  },
  {
    slug: 'html',
    title: 'HTML',
    description: 'Estruturação de páginas web',
    icon: 'Code',
    color: '#f97316',      // orange
    file: '/docs/html.md',
    order: 2,
  },
  {
    slug: 'css',
    title: 'CSS',
    description: 'Estilização e layout visual',
    icon: 'Palette',
    color: '#3b82f6',      // blue
    file: '/docs/css.md',
    order: 3,
  },
  {
    slug: 'javascript',
    title: 'JavaScript',
    description: 'Programação web e interatividade',
    icon: 'Zap',
    color: '#eab308',      // yellow
    file: '/docs/javascript.md',
    order: 4,
  },
  {
    slug: 'bootstrap',
    title: 'Bootstrap',
    description: 'Framework CSS responsivo',
    icon: 'Layout',
    color: '#8b5cf6',      // purple
    file: '/docs/bootstrap.md',
    order: 5,
  },
  {
    slug: 'react',
    title: 'React',
    description: 'Interfaces dinâmicas com componentes',
    icon: 'Atom',
    color: '#06b6d4',      // cyan
    file: '/docs/react.md',
    order: 6,
  },
  {
    slug: 'sql',
    title: 'SQL',
    description: 'Banco de dados e consultas',
    icon: 'Database',
    color: '#14b8a6',      // teal
    file: '/docs/sql.md',
    order: 7,
  },
  {
    slug: 'csharp',
    title: 'C#',
    description: 'Programação orientada a objetos',
    icon: 'Cpu',
    color: '#10b981',      // emerald
    file: '/docs/csharp.md',
    order: 8,
  },
  {
    slug: 'nodejs',
    title: 'Node.js',
    description: 'JavaScript no servidor',
    icon: 'Server',
    color: '#84cc16',      // lime
    file: '/docs/nodejs.md',
    order: 9,
  },
];
```

---

## Componentes Principais

### `DocPage.jsx` - Carregamento e renderização de Markdown

```jsx
// Lógica principal:
// 1. Recebe o slug da URL via useParams()
// 2. Busca o arquivo .md correspondente via fetch()
// 3. Renderiza com <ReactMarkdown> + plugins
// 4. Gera Table of Contents automaticamente a partir dos headings

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// Custom renderers para:
// - Blocos de código com botão de copiar
// - Links com target="_blank"
// - Imagens responsivas
// - Tabelas estilizadas
// - Callouts/alertas (blocos > com prefixos especiais)
```

### `Sidebar.jsx` - Navegação

- Seção "Projeto de Software" no topo com subitens indentados (usando `projectDocsConfig`)
- Seção "Documentação" com os docs gerais (usando `docsConfig`)
- Destaque visual na página ativa
- Ícone + título + indicador de cor para cada item
- Colapsável em mobile (hamburger menu)

### `HomePage.jsx` - Página Inicial

- Seção "Projeto de Software" com grid de cards (cor âmbar)
- Seção "Ordem sugerida de estudo" com grid de cards das tecnologias
- Cada card mostra: ícone, título, descrição curta, animação hover

---

## Padrão dos Arquivos Markdown

Cada arquivo `.md` segue esta estrutura:

```markdown
# Nome da Tecnologia

> Frase curta e motivacional sobre a tecnologia.

## O que é [Tecnologia]?
Explicação simples e acessível.

## Para que serve?
Aplicações práticas no mundo real.

## Conceitos Fundamentais
### Conceito 1
Explicação + exemplo de código

### Conceito 2
Explicação + exemplo de código

## Guia Prático
Passo a passo com exemplos progressivos.

## Dicas Importantes
Boas práticas e erros comuns.

## Exercícios
### Exercício 1 - [Título]
**Nível:** Fácil
**Enunciado:** Descrição clara do que fazer.
**Dica:** Orientação sem entregar a resposta.

### Exercício 2 - [Título]
...

## Recursos Adicionais
Links e referências para aprofundamento.
```

### Regras de Escrita dos Docs

1. **Linguagem simples** - Evitar jargão desnecessário. Quando usar termo técnico, explicar imediatamente.
2. **Exemplos antes da teoria** - Sempre que possível, mostrar o código primeiro e explicar depois.
3. **Analogias do cotidiano** - Relacionar conceitos técnicos com situações do dia a dia.
4. **Progressão gradual** - Do mais simples ao mais complexo, sem pulos.
5. **Exercícios práticos** - Mínimo de 10 exercícios por tecnologia, com níveis Fácil/Médio/Desafio.
6. **Blocos de código completos** - Nunca mostrar código pela metade; sempre funcional e executável.

---

## Design System

### Tema: Dark Mode Editorial

- **Background:** Tons escuros (#0a0a0b → #18181b)
- **Texto:** Branco suave (#e4e4e7) com hierarquia clara
- **Accent:** Verde vibrante (#22c55e) como cor principal
- **Código:** Fundo levemente diferente (#1e1e22) com syntax highlighting
- **Tipografia:** Outfit (display/headings) + Source Sans 3 (corpo) + JetBrains Mono (código)

### Responsividade

- **Mobile:** Sidebar oculta, acessível via menu hamburger
- **Tablet:** Sidebar colapsada (apenas ícones)
- **Desktop:** Sidebar expandida + conteúdo + TOC lateral

---

## Deploy

O site pode ser deployado em qualquer serviço de hospedagem estática:

```bash
npm run build
# Gera a pasta dist/ pronta para deploy
```

Opções recomendadas: Vercel, Netlify, GitHub Pages.

---

## Como Adicionar Nova Documentação

**Para documentação geral:**
1. Criar arquivo `.md` em `public/docs/nova-tecnologia.md`
2. Adicionar entrada no array `docsConfig` em `src/config/docs.js`

**Para o grupo Projeto de Software:**
1. Criar arquivo `.md` em `public/docs/novo-arquivo.md`
2. Adicionar entrada no array `projectDocsConfig` em `src/config/docs.js`

O roteamento dinâmico (`docs/:slug`) detecta automaticamente ambos os grupos.
