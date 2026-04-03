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
const template = `Bem-vindo, ${nome}!`; // template string ou literal

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

### Condicionais - if (condição única)

```javascript
// Modifique o valor de idade para testar as condições
const idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
}
```

### Condicionais - if...else (condição verdadeira ou falsa)

```javascript
const idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Ternário (if/else curto)
const status = idade >= 18 ? "Adulto" : "Menor";
```

### Condicionais - if...elseif (múltiplas condições)

```javascript
const nota = 85;
if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 80) {
    console.log("Muito bom");
} else if (nota >= 70) {
    console.log("Bom");
} else {
    console.log("Nota abaixo de 70 - Precisa melhorar");
}
```
### Condicionais - switch (múltiplas condições com base em um valor)

```javascript
let estado = ""
const uf = "SP"
switch (uf) {
  case "MG":
     estado = "Minas Gerais"
     break;
  case "SP":
     estado = "São Paulo"
     break;
  case "RJ":
     estado = "Rio de Janeiro"
     break;
  case "ES":
     estado = "Espírito Santo"
     break;
  default:
     estado = "Não é um estado da região sudeste"
}
console.log(estado)
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

// Função anônima atribuída a variável
const subtrair = function(a, b) {
    return a - b;
}

// Arrow function (forma moderna)
const multiplicar = (a, b) => a * b;

// Arrow function com corpo
const calcularMedia = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};

// Usando as funções
console.log(somar(5, 3));               // 8
console.log(subtrair(10, 4));           // 6
console.log(multiplicar(4, 2));         // 8
console.log(calcularMedia([8, 7, 9]));  // 8
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

// Filtrar
const pares = numeros.filter(n => n % 2 === 0);
// [2, 4]

// Reduzir (ex: somar todos)
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

### Manipulação de Strings

Strings possuem métodos embutidos para processar e formatar texto:

```javascript
const frase = "  Olá, Mundo JavaScript!  ";

// Remover espaços nas bordas
frase.trim()                // "Olá, Mundo JavaScript!"

// Maiúsculas / minúsculas
frase.trim().toUpperCase()  // "OLÁ, MUNDO JAVASCRIPT!"
frase.trim().toLowerCase()  // "olá, mundo javascript!"

// Verificar conteúdo
frase.includes("Mundo")     // true
frase.startsWith("  Olá")   // true
frase.endsWith("!  ")       // true

// Buscar e substituir
frase.replace("Mundo", "Turma")
// "  Olá, Turma JavaScript!  "
frase.replaceAll("a", "@")
// "  Olá, Mundo J@v@Script!  "

// Extrair partes
const texto = "JavaScript";
texto.slice(0, 4)     // "Java" (índice 0 ao 3)
texto.slice(4)        // "Script" (índice 4 até o fim)
texto.charAt(0)       // "J"

// Dividir em array
"a,b,c".split(",")    // ["a", "b", "c"]
"Olá mundo".split(" ") // ["Olá", "mundo"]

// Tamanho e posição
"Hello".length        // 5
"JavaScript".indexOf("Script")  // 4
"JavaScript".indexOf("Python")  // -1 (não encontrou)

// Repetir
"Na".repeat(3)        // "NaNaNa"
```

### Desestruturação de Arrays

Permite extrair valores de arrays diretamente em variáveis, sem usar índices:

```javascript
const cores = ["vermelho", "verde", "azul"];

// Sem desestruturação (forma antiga)
const primeira = cores[0]; // "vermelho"

// Com desestruturação
const [primeiraCor, segundaCor, terceiraCor] = cores;
console.log(primeiraCor); // "vermelho"
console.log(segundaCor);  // "verde"

// Pular elementos com vírgula
const [, , ultima] = cores;
console.log(ultima); // "azul"

// Valor padrão (se o elemento não existir)
const [a, b, c, d = "roxo"] = cores;
console.log(d); // "roxo"

// Troca de variáveis sem variável temporária
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// Capturar o restante com rest (...)
const [primeiro, ...restante] = [10, 20, 30, 40];
console.log(primeiro);  // 10
console.log(restante);  // [20, 30, 40]
```

### Desestruturação de Objetos

O mesmo conceito aplicado a objetos — extrai propriedades diretamente em variáveis:

```javascript
const aluno = {
    nome: "Lucas",
    idade: 19,
    curso: "Sistemas de Informação",
    cidade: "Belo Horizonte"
};

// Desestruturação básica
const { nome, idade } = aluno;
console.log(nome);  // "Lucas"
console.log(idade); // 19

// Renomear ao desestruturar
const { nome: nomeDoAluno, curso: nomeDoCurso } = aluno;
console.log(nomeDoAluno); // "Lucas"
console.log(nomeDoCurso); // "Sistemas de Informação"

// Valor padrão para propriedade inexistente
const { cidade, pais = "Brasil" } = aluno;
console.log(pais); // "Brasil"

// Desestruturação aninhada
const empresa = {
    nome: "TechCorp",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000
    }
};
const { endereco: { rua, numero } } = empresa;
console.log(rua);    // "Av. Paulista"
console.log(numero); // 1000

// Muito usado em parâmetros de função
function exibirAluno({ nome, curso }) {
    console.log(`${nome} — ${curso}`);
}
exibirAluno(aluno); // "Lucas — Sistemas de Informação"
```

### Spread (...) — Espalhando Elementos

O operador spread "espalha" os itens de um array ou as propriedades de um objeto:

```javascript
// ─── Spread em Arrays ────────────────────────────
const frutas  = ["maçã", "banana"];
const verduras = ["cenoura", "brócolis"];

// Juntar arrays
const alimentos = [...frutas, ...verduras];
// ["maçã", "banana", "cenoura", "brócolis"]

// Copiar array sem referenciar o original
const copia = [...frutas];
copia.push("laranja");
console.log(frutas); // ["maçã", "banana"] — original intacto

// Passar array como argumentos
const numeros = [5, 2, 8, 1, 9];
Math.max(...numeros); // 9


// ─── Spread em Objetos ───────────────────────────
const usuario  = { nome: "Ana", idade: 25 };
const endereco = { cidade: "SP", pais: "Brasil" };

// Juntar objetos
const perfil = { ...usuario, ...endereco };
// { nome: "Ana", idade: 25, cidade: "SP", pais: "Brasil" }

// Copiar e sobrescrever propriedades
const usuarioAtualizado = { ...usuario, idade: 26, ativo: true };
// { nome: "Ana", idade: 26, ativo: true }
```

### Rest (...) — Agrupando Argumentos

Mesma sintaxe do spread (`...`), mas faz o oposto: **agrupa** múltiplos valores em um array.

```javascript
// ─── Rest em Funções ─────────────────────────────
// Aceitar qualquer quantidade de argumentos
function somar(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
somar(1, 2, 3);         // 6
somar(10, 20, 30, 40);  // 100

// Primeiro argumento fixo, restante agrupado
function exibirNota(disciplina, ...notas) {
    const media = notas.reduce((s, n) => s + n, 0) / notas.length;
    console.log(`${disciplina}: média ${media.toFixed(1)}`);
}
exibirNota("Matemática", 8, 7, 9, 6);
// "Matemática: média 7.5"


// ─── Rest em Desestruturação ──────────────────────
const [cabeca, ...cauda] = [1, 2, 3, 4, 5];
console.log(cabeca); // 1
console.log(cauda);  // [2, 3, 4, 5]

const { nome, ...outrosDados } = { nome: "Carlos", idade: 30, cidade: "RJ" };
console.log(nome);        // "Carlos"
console.log(outrosDados); // { idade: 30, cidade: "RJ" }
```

> **Resumo:** Spread "abre" uma coleção para fora. Rest "recolhe" valores para dentro de um array. Mesma sintaxe (`...`), sentidos opostos.

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

### Tratamento de Erros (try/catch)

Use `try/catch` para lidar com situações que podem falhar sem quebrar o programa:

```javascript
// Estrutura básica
try {
    // código que pode lançar um erro
    const dados = JSON.parse("isso não é JSON"); // lança SyntaxError
    console.log(dados);
} catch (erro) {
    // executado apenas se houver exceção
    console.error("Erro capturado:", erro.message);
} finally {
    // executado SEMPRE, com ou sem erro
    console.log("Operação concluída.");
}


// Lançar erros personalizados com throw
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }
    return a / b;
}

try {
    console.log(dividir(10, 2)); // 5
    console.log(dividir(8, 0));  // lança Error
} catch (erro) {
    console.error(erro.message); // "Divisão por zero não é permitida!"
}


// Exemplo prático — parsear JSON com segurança
function parsearJSON(texto) {
    try {
        return JSON.parse(texto);
    } catch (erro) {
        console.error("JSON inválido:", erro.message);
        return null;
    }
}

parsearJSON('{"nome": "Ana"}');  // { nome: "Ana" }
parsearJSON("texto inválido");   // null (sem quebrar o programa)
```

> **Boa prática:** Use `try/catch` para operações que dependem de fatores externos — parseamento de JSON, chamadas de API, acesso a arquivos — onde falhas são esperadas e tratáveis.

### Funções Assíncronas (async/await)

JavaScript é **assíncrono por natureza**: certas operações (buscar dados, ler arquivos) demoram. Em vez de travar tudo enquanto espera, o JS continua executando e retoma quando o resultado chegar.

```javascript
// Promise — representa um valor futuro
const promessa = new Promise((resolve, reject) => {
    const sucesso = true;
    if (sucesso) {
        resolve("Dados carregados!");
    } else {
        reject(new Error("Falha ao carregar."));
    }
});

promessa
    .then(resultado => console.log(resultado)) // "Dados carregados!"
    .catch(erro => console.error(erro.message));


// async/await — forma mais legível de trabalhar com Promises
// Uma função async sempre retorna uma Promise
async function buscarUsuario(id) {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();
        console.log(dados.name);
    } catch (erro) {
        console.error("Erro ao buscar usuário:", erro.message);
    }
}

buscarUsuario(1); // chama sem bloquear o restante do código


// Executar múltiplas Promises em paralelo
async function buscarTudo() {
    const [usuarios, posts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
    ]);

    console.log(`Usuários: ${usuarios.length}`);
    console.log(`Posts: ${posts.length}`);
}
```

> **await só funciona dentro de funções marcadas com `async`.** Fora delas, use `.then()` / `.catch()`.

### setTimeout e setInterval

Funções para executar código após um atraso ou de forma repetida:

```javascript
// ─── setTimeout — executa UMA vez após o atraso ──
console.log("Início");

setTimeout(() => {
    console.log("Executado após 2 segundos!");
}, 2000); // tempo em milissegundos

console.log("Isso aparece ANTES do timeout");
// Saída: "Início" → "Isso aparece ANTES..." → (2s depois) "Executado..."

// Cancelar antes de executar
const meuTimeout = setTimeout(() => console.log("Nunca vai aparecer"), 5000);
clearTimeout(meuTimeout); // cancela o timeout


// ─── setInterval — executa REPETIDAMENTE ─────────
let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log(`Tick: ${contador}`);

    if (contador === 5) {
        clearInterval(intervalo); // para o intervalo após 5 execuções
        console.log("Intervalo encerrado.");
    }
}, 1000); // executa a cada 1 segundo


// Exemplo prático — relógio no console
const relogio = setInterval(() => {
    const agora = new Date();
    const hora  = agora.toLocaleTimeString("pt-BR");
    console.log(hora); // ex: "14:32:07"
}, 1000);

// Para o relógio após 10 segundos
setTimeout(() => clearInterval(relogio), 10000);
```

| Função | Executa | Como parar |
|---|---|---|
| `setTimeout(fn, ms)` | Uma vez após `ms` ms | `clearTimeout(id)` |
| `setInterval(fn, ms)` | A cada `ms` ms | `clearInterval(id)` |

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
