# HTML

> HTML é o esqueleto de toda página web. Se a internet fosse uma cidade, o HTML seria a estrutura dos prédios.

## O que é HTML?

HTML significa **HyperText Markup Language** (Linguagem de Marcação de HiperTexto). Não é uma linguagem de programação — é uma linguagem de **marcação** que define a **estrutura** do conteúdo de uma página web.

Tudo que você vê no navegador — textos, imagens, botões, formulários — está organizado com HTML.

## Para que serve?

- Criar a estrutura de sites e aplicações web
- Organizar conteúdo em títulos, parágrafos, listas, tabelas
- Inserir imagens, vídeos e áudios
- Criar formulários de cadastro e contato
- Conectar páginas entre si com links

## Conceitos Fundamentais

### Tags (Etiquetas)

HTML funciona com **tags** — comandos entre `< >` que dizem ao navegador o que cada conteúdo é.

```html
<p>Isso é um parágrafo</p>
```

A maioria das tags tem **abertura** e **fechamento**:

```html
<tag>conteúdo</tag>
```

Algumas tags são **auto-fechadas** (não precisam de fechamento):

```html
<img src="foto.jpg" alt="Uma foto" />
<br />
<hr />
```

### Estrutura Básica de uma Página

Todo arquivo HTML segue esta estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Esta é minha primeira página web.</p>
</body>
</html>
```

Explicando cada parte:

| Tag | Função |
|---|---|
| `<!DOCTYPE html>` | Diz ao navegador que é HTML5 |
| `<html>` | Elemento raiz que envolve tudo |
| `<head>` | Informações sobre a página (não visíveis) |
| `<meta charset>` | Define a codificação (acentos funcionam) |
| `<title>` | Título que aparece na aba do navegador |
| `<body>` | Tudo que aparece na tela |

### Títulos e Parágrafos

HTML tem 6 níveis de título, do `h1` (mais importante) ao `h6` (menos importante):

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>
<h4>Subseção</h4>
<h5>Detalhe</h5>
<h6>Menor título</h6>

<p>Este é um parágrafo. O navegador adiciona espaçamento automático entre parágrafos.</p>

<p>Este é outro parágrafo. Use a tag <strong>strong</strong> para <strong>negrito</strong> e <em>em</em> para <em>itálico</em>.</p>
```

### Links

Links conectam páginas entre si. São criados com a tag `<a>`:

```html
<!-- Link para outro site -->
<a href="https://google.com">Ir para o Google</a>

<!-- Link que abre em nova aba -->
<a href="https://google.com" target="_blank">Abre em nova aba</a>

<!-- Link para outra página do seu site -->
<a href="contato.html">Página de Contato</a>

<!-- Link para uma seção da mesma página -->
<a href="#sobre">Ir para a seção Sobre</a>
<h2 id="sobre">Sobre</h2>
```

### Imagens

```html
<img src="foto.jpg" alt="Descrição da imagem" width="300" />
```

O atributo `alt` é **obrigatório** — descreve a imagem para leitores de tela e aparece quando a imagem não carrega.

### Listas

```html
<!-- Lista não ordenada (com bolinhas) -->
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<!-- Lista ordenada (com números) -->
<ol>
    <li>Primeiro passo</li>
    <li>Segundo passo</li>
    <li>Terceiro passo</li>
</ol>
```

### Tabelas

```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ana</td>
            <td>25</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>Carlos</td>
            <td>30</td>
            <td>Rio de Janeiro</td>
        </tr>
    </tbody>
</table>
```

### Formulários

Formulários coletam informações do usuário:

```html
<form action="/enviar" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="seu@email.com" required />

    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" required />

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" rows="4"></textarea>

    <label>
        <input type="checkbox" name="aceito" /> Aceito os termos
    </label>

    <button type="submit">Enviar</button>
</form>
```

#### Tipos de input mais usados

| Tipo | Exemplo | Para que serve |
|---|---|---|
| `text` | `<input type="text">` | Texto simples |
| `email` | `<input type="email">` | Email (valida formato) |
| `password` | `<input type="password">` | Senha (oculta caracteres) |
| `number` | `<input type="number">` | Apenas números |
| `date` | `<input type="date">` | Seletor de data |
| `checkbox` | `<input type="checkbox">` | Caixa de seleção |
| `radio` | `<input type="radio">` | Opção única entre várias |
| `file` | `<input type="file">` | Upload de arquivo |

### Tags Semânticas

Tags semânticas dão **significado** ao conteúdo. Em vez de usar `<div>` para tudo, use tags específicas:

```html
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
    </nav>
</header>

<main>
    <article>
        <h1>Título do Artigo</h1>
        <p>Conteúdo do artigo...</p>
    </article>

    <aside>
        <h3>Links Relacionados</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2025 Meu Site</p>
</footer>
```

| Tag | Significado |
|---|---|
| `<header>` | Cabeçalho da página ou seção |
| `<nav>` | Menu de navegação |
| `<main>` | Conteúdo principal |
| `<article>` | Conteúdo independente (artigo, post) |
| `<section>` | Seção temática |
| `<aside>` | Conteúdo lateral relacionado |
| `<footer>` | Rodapé da página ou seção |

## Dicas Importantes

1. **Sempre feche suas tags** — Tags abertas sem fechamento causam problemas.
2. **Indente o código** — Use espaços/tabs para organizar as tags aninhadas.
3. **Use alt nas imagens** — Acessibilidade não é opcional.
4. **Um único h1 por página** — Apenas um título principal.
5. **Valide seu HTML** — Use o [W3C Validator](https://validator.w3.org/) para checar erros.
6. **Semântica importa** — Use as tags certas para cada conteúdo.

## Exercícios

### Exercício 1 — Página Pessoal
**Nível:** Fácil
**Enunciado:** Crie uma página HTML com seu nome como h1, um parágrafo de apresentação, e uma imagem (pode ser um placeholder).
**Dica:** Use a estrutura básica completa com DOCTYPE, html, head e body.

### Exercício 2 — Lista de Compras
**Nível:** Fácil
**Enunciado:** Crie uma página com o título "Lista de Compras" e uma lista não ordenada com pelo menos 8 itens.
**Dica:** Use `<ul>` e `<li>`.

### Exercício 3 — Menu de Navegação
**Nível:** Fácil
**Enunciado:** Crie um menu com 4 links (Home, Sobre, Serviços, Contato). Os links podem apontar para "#".
**Dica:** Use `<nav>` e `<a>`.

### Exercício 4 — Tabela de Notas
**Nível:** Médio
**Enunciado:** Crie uma tabela com 5 alunos mostrando: Nome, Nota 1, Nota 2 e Média.
**Dica:** Use `<thead>` para o cabeçalho e `<tbody>` para os dados.

### Exercício 5 — Formulário de Cadastro
**Nível:** Médio
**Enunciado:** Crie um formulário com campos: Nome, Email, Data de Nascimento, Gênero (radio buttons) e um botão Cadastrar.
**Dica:** Use `<label>` associado a cada `<input>` com o atributo `for`.

### Exercício 6 — Página de Receita
**Nível:** Médio
**Enunciado:** Crie uma página de receita culinária com: título, imagem do prato, lista de ingredientes (não ordenada), modo de preparo (lista ordenada) e tempo de preparo.
**Dica:** Combine `<ul>`, `<ol>`, `<img>` e tags semânticas.

### Exercício 7 — Blog Simples
**Nível:** Médio
**Enunciado:** Crie uma página de blog com header (nome do blog + nav), 3 artigos com título e texto, sidebar com links e footer.
**Dica:** Use tags semânticas: `<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`.

### Exercício 8 — Página de Portfólio
**Nível:** Desafio
**Enunciado:** Crie uma página completa de portfólio com: header com navegação, seção "Sobre Mim", seção "Projetos" com cards (usando divs), seção "Contato" com formulário, e footer.
**Dica:** Organize tudo com tags semânticas e use IDs para a navegação por âncoras.

### Exercício 9 — Formulário Completo
**Nível:** Desafio
**Enunciado:** Crie um formulário de matrícula escolar com: dados pessoais (nome, CPF, data de nascimento), endereço (rua, cidade, estado com select), contato (telefone, email), checkbox de aceite dos termos, e botão de envio.
**Dica:** Agrupe campos relacionados com `<fieldset>` e `<legend>`.

### Exercício 10 — Site Multi-Páginas
**Nível:** Desafio
**Enunciado:** Crie 3 arquivos HTML (index.html, sobre.html, contato.html) que compartilham o mesmo menu de navegação e se linkam entre si.
**Dica:** Cada página deve ter a estrutura completa e o menu com links relativos.

## Recursos Adicionais

- [MDN Web Docs — HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) — Referência oficial
- [W3Schools HTML](https://www.w3schools.com/html/) — Tutoriais interativos
- [HTML Validator](https://validator.w3.org/) — Valide seu código
