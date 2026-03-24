# JavaScript

> JavaScript é a linguagem que dá vida às páginas web. Enquanto HTML estrutura e CSS estiliza, JavaScript faz as coisas acontecerem.

## O que é JavaScript?

JavaScript (JS) é uma **linguagem de programação** que roda no navegador. Ela permite criar interatividade: menus que abrem, formulários que validam, conteúdos que mudam dinamicamente.

Hoje, JavaScript vai muito além do navegador — com Node.js roda no servidor, e com React Native cria apps mobile.

## Para que serve?

- Adicionar interatividade a páginas web
- Validar formulários antes do envio
- Manipular o conteúdo da página (DOM)
- Fazer requisições a APIs (carregar dados sem recarregar)
- Criar aplicações completas (frontend e backend)

## Principais características

- **Linguagem interpretada:** o código é executado diretamente, sem compilação prévia.
- **Tipagem dinâmica e fraca:** variáveis não têm tipo fixo e há conversões automáticas de tipo.
- **Multi-paradigma:** suporta programação procedural, orientada a objetos e funcional.
- **Orientada a eventos:** responde a ações do usuário (cliques, digitação, scroll).
- **Assíncrona:** com Promises e `async/await`, executa operações sem travar a página.
- **Roda no navegador e no servidor:** com Node.js, o mesmo código pode ser usado nos dois ambientes.
- **Ecossistema enorme:** npm possui mais de 2 milhões de pacotes disponíveis.

## Como instalar

**No navegador (sem instalação):**

Todo navegador moderno já tem um console JavaScript. Pressione `F12` → aba **Console** e comece a digitar código.

**Para projetos completos:**

1. Instale o **Node.js** em [nodejs.org](https://nodejs.org) (versão LTS recomendada)
2. Instale o **VS Code** em [code.visualstudio.com](https://code.visualstudio.com/)

**Verificar instalação:**

```bash
node --version   # ex: v20.11.0
npm --version    # ex: 10.2.4
```

**Criar e rodar um arquivo:**

```bash
# Crie um arquivo app.js e execute com:
node app.js
```

## Conceitos Fundamentais

### Variáveis

JavaScript tem 3 formas de declarar variáveis:

```javascript
// let: pode ser alterada depois
let nome = "Maria";
nome = "João"; // ok

// const: não pode ser alterada
const PI = 3.14159;
// PI = 3; // ERRO!

// var: forma antiga, evite usar
var idade = 25;
```

**Regra simples:** Use `const` sempre que possível. Use `let` quando precisar alterar o valor. Nunca use `var`.

### Tipos de Dados

```javascript
// String (texto)
const nome = "Carlos";
const mensagem = 'Olá, mundo!';
const template = `Bem-vindo, ${nome}!`; // template literal

// Number (número)
const idade = 30;
const altura = 1.75;

// Boolean (verdadeiro/falso)
const ativo = true;
const logado = false;

// Array (lista)
const frutas = ["Maçã", "Banana", "Laranja"];

// Object (objeto)
const pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "São Paulo"
};

// null e undefined
const vazio = null;      // intencionalmente vazio
let indefinido;          // declarada mas sem valor (undefined)
```

### Operadores

```javascript
// Aritméticos
5 + 3     // 8
10 - 4    // 6
6 * 2     // 12
15 / 3    // 5
10 % 3    // 1 (resto)
2 ** 3    // 8 (potência)

// Comparação
5 === 5    // true (igualdade estrita - use sempre este!)
5 == "5"   // true (igualdade solta - evite!)
5 !== 3    // true (diferente estrito)
10 > 7     // true
3 < 1      // false

// Lógicos
true && false   // false (E)
true || false   // true (OU)
!true           // false (NÃO)
```

**Importante:** Sempre use `===` em vez de `==`. O triplo igual compara valor E tipo, evitando bugs sutis.

### Condicionais

```javascript
const idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 16) {
    console.log("Pode votar, mas não pode dirigir");
} else {
    console.log("Menor de idade");
}

// Ternário (if/else curto)
const status = idade >= 18 ? "Adulto" : "Menor";
```

### Loops

```javascript
// for clássico
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// for...of (percorrer arrays)
const cores = ["vermelho", "azul", "verde"];
for (const cor of cores) {
    console.log(cor);
}

// while
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}

// forEach (método de array)
cores.forEach((cor, indice) => {
    console.log(`${indice}: ${cor}`);
});
```

### Funções

```javascript
// Função tradicional
function somar(a, b) {
    return a + b;
}

// Arrow function (forma moderna)
const multiplicar = (a, b) => a * b;

// Arrow function com corpo
const calcularMedia = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};

// Usando as funções
console.log(somar(5, 3));           // 8
console.log(multiplicar(4, 2));     // 8
console.log(calcularMedia([8, 7, 9])); // 8
```

### Arrays (Listas)

Arrays são fundamentais em JavaScript. Conheça os métodos mais usados:

```javascript
const numeros = [1, 2, 3, 4, 5];

// Adicionar e remover
numeros.push(6);        // adiciona no final: [1,2,3,4,5,6]
numeros.pop();           // remove do final: [1,2,3,4,5]
numeros.unshift(0);     // adiciona no início: [0,1,2,3,4,5]
numeros.shift();         // remove do início: [1,2,3,4,5]

// Buscar
numeros.indexOf(3);      // 2 (posição do valor 3)
numeros.includes(4);     // true (existe no array?)

// Transformar
const dobro = numeros.map(n => n * 2);
// [2, 4, 6, 8, 10]

const pares = numeros.filter(n => n % 2 === 0);
// [2, 4]

const soma = numeros.reduce((acc, n) => acc + n, 0);
// 15

// Ordenar
const nomes = ["Carlos", "Ana", "Bruno"];
nomes.sort(); // ["Ana", "Bruno", "Carlos"]
```

### Objetos

```javascript
const aluno = {
    nome: "Pedro",
    idade: 20,
    notas: [8, 7, 9],
    aprovado: true
};

// Acessar propriedades
console.log(aluno.nome);      // "Pedro"
console.log(aluno["idade"]);  // 20

// Adicionar propriedade
aluno.email = "pedro@email.com";

// Desestruturação
const { nome, idade, notas } = aluno;
console.log(nome); // "Pedro"

// Spread operator
const alunoAtualizado = { ...aluno, idade: 21 };
```

### Manipulação do DOM

O DOM (Document Object Model) é como o JavaScript interage com o HTML:

```javascript
// Selecionar elementos
const titulo = document.getElementById("titulo");
const botoes = document.querySelectorAll(".btn");
const primeiro = document.querySelector(".card");

// Alterar conteúdo
titulo.textContent = "Novo Título";
titulo.innerHTML = "<em>Título em itálico</em>";

// Alterar estilo
titulo.style.color = "blue";
titulo.style.fontSize = "24px";

// Adicionar/remover classes
titulo.classList.add("ativo");
titulo.classList.remove("oculto");
titulo.classList.toggle("visivel");

// Eventos
const botao = document.querySelector("#meuBotao");

botao.addEventListener("click", () => {
    alert("Botão clicado!");
});

// Criar elementos
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Parágrafo criado com JavaScript";
document.body.appendChild(novoParagrafo);
```

### Promises e Async/Await

Para operações que demoram (como buscar dados da internet):

```javascript
// Fetch API com async/await
async function buscarUsuario(id) {
    try {
        const resposta = await fetch(`https://api.exemplo.com/users/${id}`);
        const dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro ao buscar usuário:", erro);
    }
}

buscarUsuario(1);
```

### Armazenamento Local

```javascript
// Salvar dados no navegador
localStorage.setItem("nome", "Maria");
localStorage.setItem("config", JSON.stringify({ tema: "escuro" }));

// Recuperar
const nome = localStorage.getItem("nome"); // "Maria"
const config = JSON.parse(localStorage.getItem("config")); // { tema: "escuro" }

// Remover
localStorage.removeItem("nome");
```

## Dicas Importantes

1. **Use `const` e `let`** — Nunca `var`.
2. **Use `===` em vez de `==`** — Comparação estrita evita bugs.
3. **Console é seu amigo** — Use `console.log()` para debugar.
4. **Nomeie bem suas variáveis** — `totalDeAlunos` em vez de `x`.
5. **Aprenda os métodos de array** — `map`, `filter`, `reduce` são usados o tempo todo.
6. **Cuidado com escopo** — Variáveis `let` e `const` existem apenas dentro do `{}` onde foram criadas.

## Exercícios

### Exercício 1 — Conversor de Temperatura
**Nível:** Fácil
**Enunciado:** Crie uma função que converta Celsius para Fahrenheit. Fórmula: F = C × 9/5 + 32.
**Dica:** A função recebe um número e retorna o resultado da fórmula.

### Exercício 2 — Verificador de Palíndromo
**Nível:** Fácil
**Enunciado:** Crie uma função que verifique se uma palavra é um palíndromo (lê igual de trás para frente). Ex: "arara" é palíndromo.
**Dica:** Inverta a string e compare com a original.

### Exercício 3 — Lista de Tarefas no Console
**Nível:** Fácil
**Enunciado:** Crie um array de tarefas e funções para: adicionar tarefa, remover por índice e listar todas.
**Dica:** Use `push()`, `splice()` e `forEach()`.

### Exercício 4 — Contador na Página
**Nível:** Médio
**Enunciado:** Crie uma página com um número exibido e 3 botões: +1, -1 e Zerar. Use DOM para atualizar o número.
**Dica:** Use `addEventListener` e `textContent` para atualizar a exibição.

### Exercício 5 — Filtro de Produtos
**Nível:** Médio
**Enunciado:** Dado um array de objetos `{nome, preco, categoria}`, crie funções para: filtrar por categoria, ordenar por preço e buscar por nome.
**Dica:** Use `filter()`, `sort()` e `find()`.

### Exercício 6 — Validação de Formulário
**Nível:** Médio
**Enunciado:** Crie um formulário de cadastro e valide com JavaScript: nome (min 3 caracteres), email (conter @), senha (min 6 caracteres). Exiba mensagens de erro.
**Dica:** Use `addEventListener("submit", ...)` e `event.preventDefault()`.

### Exercício 7 — Consumir API Pública
**Nível:** Médio
**Enunciado:** Use a API do ViaCEP (viacep.com.br) para buscar endereço pelo CEP e exibir na página.
**Dica:** Use `fetch()` com `async/await` e a URL `https://viacep.com.br/ws/{cep}/json/`.

### Exercício 8 — Quiz Interativo
**Nível:** Desafio
**Enunciado:** Crie um quiz com 5 perguntas. Cada pergunta tem 4 alternativas. Ao final, mostre a pontuação e quais o usuário acertou/errou.
**Dica:** Use um array de objetos com pergunta, alternativas e resposta correta.

### Exercício 9 — Carrinho de Compras
**Nível:** Desafio
**Enunciado:** Crie um carrinho de compras com: lista de produtos, botão "Adicionar ao Carrinho", exibição dos itens no carrinho, quantidade, valor total e botão remover.
**Dica:** Use um array de objetos no carrinho e atualize o DOM a cada mudança.

### Exercício 10 — Jogo da Memória
**Nível:** Desafio
**Enunciado:** Crie um jogo da memória com 8 pares de cartas. As cartas começam viradas para baixo, o jogador vira duas por vez e tenta encontrar os pares.
**Dica:** Use um array embaralhado, CSS para a animação de virar e contadores de tentativas.

## Recursos Adicionais

- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Referência oficial
- [JavaScript.info](https://javascript.info/) — Tutorial moderno e completo
- [Eloquent JavaScript](https://eloquentjavascript.net/) — Livro gratuito
