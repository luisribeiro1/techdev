# Node.js

> Node.js levou o JavaScript para fora do navegador. Agora a mesma linguagem que anima botões também constrói servidores inteiros.

## O que é Node.js?

Node.js é um **ambiente de execução JavaScript** que roda no servidor. Ele usa o motor V8 do Google Chrome para executar JavaScript fora do navegador.

Com Node.js, você pode criar servidores web, APIs, ferramentas de linha de comando e muito mais — tudo com JavaScript.

## Para que serve?

- Criar servidores e APIs REST
- Construir aplicações em tempo real (chat, jogos)
- Ferramentas de automação e scripts
- Microsserviços
- Backend de aplicações web e mobile

## Principais características

- **Event Loop:** arquitetura não-bloqueante que permite lidar com milhares de conexões simultâneas sem travar.
- **Single-threaded:** usa uma única thread principal, mas delega operações pesadas ao sistema operacional.
- **Assíncrono por natureza:** I/O (arquivos, banco, rede) não bloqueia a execução — usa callbacks, Promises e async/await.
- **Motor V8:** usa o mesmo motor JavaScript do Google Chrome, garantindo alta performance.
- **npm:** gerenciador de pacotes com mais de 2 milhões de bibliotecas disponíveis.
- **Full-stack JavaScript:** o mesmo desenvolvedor e a mesma linguagem no frontend e no backend.
- **Ideal para APIs e tempo real:** muito usado para APIs REST, WebSockets e microserviços.

## Como instalar

**1. Baixe e instale o Node.js:**

Acesse [nodejs.org](https://nodejs.org) e instale a versão **LTS** (Long Term Support) — mais estável para iniciantes.

**Verificar instalação:**

```bash
node --version   # ex: v20.11.0
npm --version    # ex: 10.2.4
```

**2. Instale o VS Code:**

[code.visualstudio.com](https://code.visualstudio.com/) — editor recomendado com suporte nativo a JavaScript/Node.js.

**3. Criar e rodar um arquivo:**

```bash
# Crie app.js com seu código
node app.js

# Criar projeto com package.json:
npm init -y
```

## Conceitos Fundamentais

### Instalação e Primeiro Programa

Após instalar o Node.js (nodejs.org), crie um arquivo:

```javascript
// app.js
console.log("Olá do Node.js!");

const nome = "Maria";
console.log(`Bem-vinda, ${nome}!`);
```

Execute no terminal:

```bash
node app.js
```

### npm — Gerenciador de Pacotes

O npm vem junto com o Node.js e gerencia as dependências do projeto:

```bash
# Iniciar um projeto
npm init -y

# Instalar um pacote
npm install express

# Instalar como dependência de desenvolvimento
npm install --save-dev nodemon

# Executar scripts do package.json
npm run dev
```

### Módulos

Node.js organiza o código em **módulos** (arquivos separados):

```javascript
// matematica.js — exportando
function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

module.exports = { somar, multiplicar };
```

```javascript
// app.js — importando
const { somar, multiplicar } = require('./matematica');

console.log(somar(5, 3));        // 8
console.log(multiplicar(4, 2));  // 8
```

#### ES Modules (estilo moderno)

Adicione `"type": "module"` no `package.json`:

```javascript
// matematica.js
export function somar(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}
```

```javascript
// app.js
import { somar, multiplicar } from './matematica.js';
```

### Sistema de Arquivos (fs)

Node.js pode ler e escrever arquivos:

```javascript
const fs = require('fs');

// Ler arquivo (assíncrono)
fs.readFile('dados.txt', 'utf-8', (erro, conteudo) => {
    if (erro) {
        console.error('Erro ao ler arquivo:', erro);
        return;
    }
    console.log(conteudo);
});

// Escrever arquivo
fs.writeFile('saida.txt', 'Conteúdo do arquivo', (erro) => {
    if (erro) console.error(erro);
    else console.log('Arquivo criado!');
});

// Versão com Promises (recomendada)
const fsPromises = require('fs').promises;

async function lerArquivo() {
    try {
        const conteudo = await fsPromises.readFile('dados.txt', 'utf-8');
        console.log(conteudo);
    } catch (erro) {
        console.error('Erro:', erro);
    }
}
```

### Servidor HTTP Básico

```javascript
const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (req.url === '/') {
        res.end('<h1>Página Inicial</h1>');
    } else if (req.url === '/sobre') {
        res.end('<h1>Sobre Nós</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>Página não encontrada</h1>');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
```

### Express — Framework Web

Express simplifica a criação de servidores:

```bash
npm install express
```

```javascript
const express = require('express');
const app = express();

// Middleware para receber JSON
app.use(express.json());

// Rota GET
app.get('/', (req, res) => {
    res.json({ mensagem: 'Bem-vindo à API!' });
});

// Rota com parâmetro
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, nome: `Usuário ${id}` });
});

// Rota POST
app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    res.status(201).json({ id: 1, nome, email });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});
```

### API REST Completa (CRUD)

```javascript
const express = require('express');
const app = express();
app.use(express.json());

// "Banco de dados" em memória
let produtos = [
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 80 },
    { id: 3, nome: 'Teclado', preco: 150 },
];
let proximoId = 4;

// GET — Listar todos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// GET — Buscar por ID
app.get('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json(produto);
});

// POST — Criar
app.post('/api/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ erro: 'Nome e preço são obrigatórios' });
    }

    const novoProduto = { id: proximoId++, nome, preco };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT — Atualizar
app.put('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    const { nome, preco } = req.body;
    if (nome) produto.nome = nome;
    if (preco) produto.preco = preco;

    res.json(produto);
});

// DELETE — Excluir
app.delete('/api/produtos/:id', (req, res) => {
    const indice = produtos.findIndex(p => p.id === parseInt(req.params.id));
    if (indice === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    produtos.splice(indice, 1);
    res.status(204).send();
});

app.listen(3000, () => console.log('API rodando na porta 3000'));
```

### Middleware

Middlewares são funções que executam **entre a requisição e a resposta**:

```javascript
// Middleware de log
function logger(req, res, next) {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // passa para o próximo middleware/rota
}

app.use(logger); // aplica a todas as rotas

// Middleware de autenticação
function autenticar(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ erro: 'Token não fornecido' });
    }

    // Verificar token...
    next();
}

// Aplicar apenas em rotas específicas
app.get('/api/protegido', autenticar, (req, res) => {
    res.json({ mensagem: 'Rota protegida!' });
});
```

### Async/Await com Node.js

```javascript
// Exemplo com operação assíncrona
async function buscarDados() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await resposta.json();
        return usuarios;
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}

// Usando em rota Express
app.get('/api/usuarios-externos', async (req, res) => {
    try {
        const usuarios = await buscarDados();
        res.json(usuarios);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar dados' });
    }
});
```

### Variáveis de Ambiente

Use o pacote `dotenv` para gerenciar configurações:

```bash
npm install dotenv
```

```
# .env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=minhasenha
```

```javascript
require('dotenv').config();

const porta = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;

app.listen(porta, () => {
    console.log(`Servidor na porta ${porta}`);
});
```

## Dicas Importantes

1. **Sempre trate erros** — Use try/catch em operações async e middlewares de erro no Express.
2. **Nunca suba o `.env`** — Adicione `.env` ao `.gitignore`.
3. **Use nodemon em desenvolvimento** — Reinicia o servidor automaticamente ao salvar.
4. **Valide as entradas** — Nunca confie nos dados que o usuário envia.
5. **Organize em pastas** — Separe rotas, controllers, middlewares e models.
6. **Use status HTTP corretos** — 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Error.

## Exercícios

### Exercício 1 — Olá, Node!
**Nível:** Fácil
**Enunciado:** Crie um programa que exiba no console: seu nome, a versão do Node.js (`process.version`) e a data/hora atual.
**Dica:** Use `new Date().toLocaleString('pt-BR')`.

### Exercício 2 — Calculadora CLI
**Nível:** Fácil
**Enunciado:** Crie uma calculadora que receba 2 números e a operação por argumentos de linha de comando: `node calc.js 5 + 3`.
**Dica:** Use `process.argv` para acessar os argumentos.

### Exercício 3 — Leitor de Arquivo
**Nível:** Fácil
**Enunciado:** Crie um programa que leia um arquivo `.txt` e exiba seu conteúdo no console. Se o arquivo não existir, exiba uma mensagem amigável.
**Dica:** Use `fs.promises.readFile` com try/catch.

### Exercício 4 — Servidor Simples
**Nível:** Médio
**Enunciado:** Crie um servidor HTTP (sem Express) com 3 rotas: `/` (home), `/sobre` e `/contato`. Retorne HTML em cada uma.
**Dica:** Use `http.createServer` e verifique `req.url`.

### Exercício 5 — API de Tarefas
**Nível:** Médio
**Enunciado:** Crie uma API REST com Express para gerenciar tarefas: GET (listar), POST (criar), PUT (atualizar) e DELETE (excluir). Armazene em um array.
**Dica:** Siga o padrão da API REST Completa mostrada acima.

### Exercício 6 — Middleware de Log
**Nível:** Médio
**Enunciado:** Crie um middleware que registra em um arquivo `log.txt` cada requisição recebida (método, URL, data/hora).
**Dica:** Use `fs.appendFile` dentro do middleware.

### Exercício 7 — API com Validação
**Nível:** Médio
**Enunciado:** Expanda a API de tarefas: valide que o título tem no mínimo 3 caracteres, que o status é "pendente" ou "concluída", e retorne erros claros.
**Dica:** Crie um middleware de validação específico para as rotas POST e PUT.

### Exercício 8 — API com Query Params
**Nível:** Desafio
**Enunciado:** Crie uma API de produtos que aceite filtros via query string: `/api/produtos?categoria=eletronicos&precoMax=500&ordenar=preco`.
**Dica:** Acesse os parâmetros com `req.query` e aplique `filter` e `sort`.

### Exercício 9 — Sistema de Autenticação Simples
**Nível:** Desafio
**Enunciado:** Crie rotas de registro e login. O registro salva usuário/senha (em memória). O login verifica as credenciais e retorna um token simples. Proteja rotas com middleware.
**Dica:** Use `crypto.randomUUID()` para gerar tokens e um array para armazenar tokens válidos.

### Exercício 10 — API Completa com Múltiplas Entidades
**Nível:** Desafio
**Enunciado:** Crie uma API de e-commerce com: clientes, produtos e pedidos. Um pedido referencia um cliente e contém vários produtos. Implemente CRUD completo para cada entidade.
**Dica:** Organize em arquivos separados (rotas/clientes.js, rotas/produtos.js) e use `app.use('/api/clientes', clientesRouter)`.

## Recursos Adicionais

- [Node.js Docs](https://nodejs.org/docs/latest/api/) — Documentação oficial
- [Express.js](https://expressjs.com/pt-br/) — Framework web
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) — Boas práticas
