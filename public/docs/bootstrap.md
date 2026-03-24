# Bootstrap

> Bootstrap é como um kit de ferramentas pronto para construir sites bonitos e responsivos sem começar do zero.

## O que é Bootstrap?

Bootstrap é um **framework CSS** criado pelo Twitter. Ele oferece componentes prontos (botões, cards, modais, navbars) e um sistema de grid que facilita criar layouts responsivos rapidamente.

Em vez de escrever todo o CSS do zero, você usa **classes utilitárias** do Bootstrap.

## Para que serve?

- Criar sites responsivos rapidamente
- Usar componentes de interface prontos e testados
- Manter consistência visual no projeto
- Prototipar layouts sem perder tempo com CSS básico

## Principais características

- **Mobile-first:** projetado para funcionar em telas pequenas antes de adaptar para telas maiores.
- **Sistema de grid (12 colunas):** facilita criar layouts responsivos com classes como `col-md-6`.
- **Componentes prontos:** botões, cards, modais, navbars, formulários e muito mais.
- **Classes utilitárias:** ajustam margem, padding, cor e tipografia diretamente no HTML.
- **Temas customizáveis:** variáveis CSS permitem alterar cores e estilos globais com facilidade.
- **Compatibilidade:** funciona nos principais navegadores modernos sem configuração extra.

## Como instalar

**Opção 1 — CDN (mais simples, sem instalar nada):**

Cole no `<head>` do seu HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

Cole antes do `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

**Opção 2 — npm (para projetos com Node.js):**

```bash
npm install bootstrap
```

E importe no seu arquivo principal:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Conceitos Fundamentais

### Instalação

A forma mais simples é via CDN no HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Bootstrap</title>
    <!-- CSS do Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <h1 class="text-center text-primary">Olá, Bootstrap!</h1>

    <!-- JavaScript do Bootstrap (antes do </body>) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

Via npm (para projetos com bundler):

```bash
npm install bootstrap
```

### Sistema de Grid

O grid do Bootstrap divide a tela em **12 colunas**. Você combina colunas para criar layouts:

```html
<div class="container">
    <div class="row">
        <div class="col-12">Ocupa 12 colunas (largura total)</div>
    </div>
    <div class="row">
        <div class="col-6">Metade</div>
        <div class="col-6">Metade</div>
    </div>
    <div class="row">
        <div class="col-4">Um terço</div>
        <div class="col-4">Um terço</div>
        <div class="col-4">Um terço</div>
    </div>
</div>
```

#### Breakpoints Responsivos

| Classe | Tamanho | Tela |
|---|---|---|
| `col-` | < 576px | Extra pequena (celular) |
| `col-sm-` | ≥ 576px | Pequena |
| `col-md-` | ≥ 768px | Média (tablet) |
| `col-lg-` | ≥ 992px | Grande (desktop) |
| `col-xl-` | ≥ 1200px | Extra grande |
| `col-xxl-` | ≥ 1400px | Extra extra grande |

```html
<div class="container">
    <div class="row">
        <!-- Mobile: empilhados (12). Tablet: lado a lado (6+6). Desktop: 3 colunas (4+4+4) -->
        <div class="col-12 col-md-6 col-lg-4">Card 1</div>
        <div class="col-12 col-md-6 col-lg-4">Card 2</div>
        <div class="col-12 col-md-12 col-lg-4">Card 3</div>
    </div>
</div>
```

### Container

O container centraliza e limita a largura do conteúdo:

```html
<!-- Largura fixa em cada breakpoint -->
<div class="container">...</div>

<!-- Ocupa 100% da largura sempre -->
<div class="container-fluid">...</div>

<!-- 100% até o breakpoint, depois fica fixo -->
<div class="container-md">...</div>
```

### Tipografia e Texto

```html
<h1 class="display-1">Título gigante</h1>
<p class="lead">Parágrafo destacado, com fonte maior.</p>
<p class="text-muted">Texto em cinza suave.</p>
<p class="text-center">Texto centralizado.</p>
<p class="text-end">Texto à direita.</p>
<p class="fw-bold">Negrito.</p>
<p class="fst-italic">Itálico.</p>
<small class="text-muted">Texto pequeno e cinza.</small>
```

### Cores

Bootstrap tem cores semânticas que você usa em texto, fundo e bordas:

```html
<!-- Cores de texto -->
<p class="text-primary">Azul primário</p>
<p class="text-success">Verde sucesso</p>
<p class="text-danger">Vermelho perigo</p>
<p class="text-warning">Amarelo aviso</p>
<p class="text-info">Azul claro info</p>

<!-- Cores de fundo -->
<div class="bg-primary text-white p-3">Fundo azul</div>
<div class="bg-dark text-white p-3">Fundo escuro</div>
<div class="bg-light text-dark p-3">Fundo claro</div>
```

### Botões

```html
<button class="btn btn-primary">Primário</button>
<button class="btn btn-secondary">Secundário</button>
<button class="btn btn-success">Sucesso</button>
<button class="btn btn-danger">Perigo</button>
<button class="btn btn-warning">Aviso</button>
<button class="btn btn-outline-primary">Contorno</button>
<button class="btn btn-lg btn-primary">Grande</button>
<button class="btn btn-sm btn-primary">Pequeno</button>
```

### Cards

Cards são os componentes mais usados para exibir conteúdo:

```html
<div class="card" style="width: 18rem;">
    <img src="imagem.jpg" class="card-img-top" alt="Imagem">
    <div class="card-body">
        <h5 class="card-title">Título do Card</h5>
        <p class="card-text">Descrição breve do conteúdo do card.</p>
        <a href="#" class="btn btn-primary">Saiba mais</a>
    </div>
</div>
```

### Navbar (Menu de Navegação)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">MeuSite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Formulários

```html
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="nome@email.com">
    </div>
    <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input type="password" class="form-control" id="senha">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="lembrar">
        <label class="form-check-label" for="lembrar">Lembrar de mim</label>
    </div>
    <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```

### Utilitários de Espaçamento

Bootstrap usa um sistema de `m` (margin) e `p` (padding) com números de 0 a 5:

```html
<!-- m = margin, p = padding -->
<!-- t = top, b = bottom, s = start(esq), e = end(dir), x = horizontal, y = vertical -->
<div class="mt-3">Margin top nível 3</div>
<div class="px-4">Padding horizontal nível 4</div>
<div class="mb-5">Margin bottom nível 5</div>
<div class="p-3">Padding em todos os lados nível 3</div>
```

| Nível | Tamanho |
|---|---|
| 0 | 0 |
| 1 | 0.25rem |
| 2 | 0.5rem |
| 3 | 1rem |
| 4 | 1.5rem |
| 5 | 3rem |

### Outros Componentes Úteis

#### Alertas

```html
<div class="alert alert-success" role="alert">
    Operação realizada com sucesso!
</div>
<div class="alert alert-danger" role="alert">
    Erro: preencha todos os campos.
</div>
```

#### Modal

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meuModal">
    Abrir Modal
</button>

<div class="modal fade" id="meuModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Título</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Conteúdo do modal aqui.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button class="btn btn-primary">Salvar</button>
            </div>
        </div>
    </div>
</div>
```

## Dicas Importantes

1. **Sempre inclua o viewport meta** — Sem ele, a responsividade não funciona.
2. **Container > Row > Col** — Siga sempre essa hierarquia no grid.
3. **As colunas somam 12** — Se passar de 12, quebra para a próxima linha.
4. **Mobile First** — Comece definindo o layout para celular (col-12), depois ajuste para telas maiores.
5. **Não modifique o CSS do Bootstrap** — Sobrescreva com suas próprias classes.
6. **Explore a documentação** — Bootstrap tem dezenas de componentes prontos na docs oficial.

## Exercícios

### Exercício 1 — Página com Grid
**Nível:** Fácil
**Enunciado:** Crie uma página com 3 colunas iguais usando o grid. Cada coluna deve ter um card simples com título e texto.
**Dica:** Use `container > row > col-4` e o componente card.

### Exercício 2 — Navbar Responsiva
**Nível:** Fácil
**Enunciado:** Crie uma navbar com logo, 4 links e um botão "Login". Deve colapsar em hamburger no mobile.
**Dica:** Use o exemplo da seção Navbar e customize.

### Exercício 3 — Formulário de Contato
**Nível:** Fácil
**Enunciado:** Crie um formulário de contato centralizado com: nome, email, assunto (select), mensagem (textarea) e botão enviar.
**Dica:** Use `form-control`, `form-select` e centralize com `col-md-6 mx-auto`.

### Exercício 4 — Grid de Produtos
**Nível:** Médio
**Enunciado:** Crie uma grade de 6 cards de produtos. Desktop: 3 por linha. Tablet: 2 por linha. Mobile: 1 por linha. Cada card tem imagem, nome, preço e botão comprar.
**Dica:** Use `col-12 col-md-6 col-lg-4` em cada card.

### Exercício 5 — Dashboard Layout
**Nível:** Médio
**Enunciado:** Crie um layout de dashboard com: navbar no topo, sidebar à esquerda com links, e área de conteúdo com cards de estatísticas.
**Dica:** Use grid com `col-md-3` para sidebar e `col-md-9` para conteúdo.

### Exercício 6 — Accordion FAQ
**Nível:** Médio
**Enunciado:** Crie uma seção de Perguntas Frequentes usando o componente Accordion do Bootstrap com pelo menos 5 perguntas.
**Dica:** Use as classes `accordion`, `accordion-item`, `accordion-header` e `accordion-body`.

### Exercício 7 — Landing Page
**Nível:** Médio
**Enunciado:** Crie uma landing page com: hero section com fundo escuro, seção de features com ícones, seção de preços com 3 planos e footer.
**Dica:** Combine background utilities, grid, cards e botões.

### Exercício 8 — Tabela de Dados
**Nível:** Desafio
**Enunciado:** Crie uma tabela responsiva com dados de 10 funcionários. Inclua ordenação visual (ícones de seta), badges de status e paginação abaixo.
**Dica:** Use `table-responsive`, `badge` e `pagination`.

### Exercício 9 — Portal de Notícias
**Nível:** Desafio
**Enunciado:** Crie a página inicial de um portal de notícias com: navbar, destaque principal (card grande), grid de notícias menores, sidebar com "Mais Lidas" e footer.
**Dica:** Use combinações de `col-lg-8` e `col-lg-4` para layout principal + sidebar.

### Exercício 10 — Sistema de Login/Registro
**Nível:** Desafio
**Enunciado:** Crie uma página com tabs (Login | Registro). Cada tab mostra um formulário diferente. Inclua validação visual com classes `is-valid` e `is-invalid`.
**Dica:** Use o componente Nav Tabs e os estilos de validação do Bootstrap.

## Recursos Adicionais

- [Documentação Oficial Bootstrap 5](https://getbootstrap.com/docs/5.3/) — Referência completa
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/) — Exemplos prontos
- [Bootstrap Icons](https://icons.getbootstrap.com/) — Biblioteca de ícones
