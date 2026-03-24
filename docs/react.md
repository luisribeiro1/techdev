# React

> React transforma a forma como você pensa sobre interfaces. Em vez de páginas, você pensa em componentes.

## O que é React?

React é uma **biblioteca JavaScript** criada pelo Facebook (Meta) para construir **interfaces de usuário** (UI). A ideia central é dividir tudo em **componentes** — blocos reutilizáveis e independentes.

Em vez de manipular o HTML diretamente (DOM), o React cria um DOM Virtual e atualiza apenas o que mudou.

## Para que serve?

- Criar Single Page Applications (SPA)
- Construir interfaces dinâmicas e reativas
- Desenvolver dashboards, e-commerces, redes sociais
- Reutilizar componentes em diferentes partes do projeto
- Criar apps mobile com React Native

## Principais características

- **Componentização:** a interface é dividida em componentes reutilizáveis e independentes.
- **Virtual DOM:** o React mantém uma cópia virtual do DOM e atualiza apenas o que mudou, tornando a interface mais rápida.
- **JSX:** sintaxe que mistura JavaScript com HTML, tornando o código mais legível.
- **Fluxo unidirecional de dados:** os dados fluem do componente pai para o filho (props).
- **Hooks:** funções como `useState` e `useEffect` adicionam estado e ciclo de vida a componentes funcionais.
- **Ecossistema rico:** React Router (navegação), Context API (estado global), Next.js (SSR).
- **Mantido pela Meta:** ampla comunidade, documentação excelente e mercado de trabalho aquecido.

## Como instalar

**Pré-requisito:** Node.js instalado ([nodejs.org](https://nodejs.org))

**Criar projeto com Vite (recomendado):**

```bash
npm create vite@latest meu-app -- --template react
cd meu-app
npm install
npm run dev
```

**Criar projeto com Create React App (alternativa):**

```bash
npx create-react-app meu-app
cd meu-app
npm start
```

Após o `npm run dev`, abra `http://localhost:5173` no navegador.

## Conceitos Fundamentais

### Criando um Projeto

```bash
npm create vite@latest meu-app -- --template react
cd meu-app
npm install
npm run dev
```

### JSX

JSX é a mistura de JavaScript + HTML que o React usa:

```jsx
function Saudacao() {
    const nome = "Maria";

    return (
        <div>
            <h1>Olá, {nome}!</h1>
            <p>Hoje é {new Date().toLocaleDateString()}</p>
        </div>
    );
}
```

Regras do JSX:
- Sempre retorne **um único elemento pai** (use `<div>` ou `<>...</>`)
- Use `className` em vez de `class`
- Use `{}` para inserir JavaScript dentro do HTML
- Feche todas as tags, incluindo `<img />`, `<br />`, `<input />`

### Componentes

Componentes são **funções que retornam JSX**:

```jsx
// Componente simples
function Botao() {
    return <button>Clique aqui</button>;
}

// Usando o componente
function App() {
    return (
        <div>
            <Botao />
            <Botao />
            <Botao />
        </div>
    );
}
```

### Props (Propriedades)

Props são como **argumentos** que você passa para um componente:

```jsx
function CardUsuario({ nome, cargo, foto }) {
    return (
        <div className="card">
            <img src={foto} alt={nome} />
            <h3>{nome}</h3>
            <p>{cargo}</p>
        </div>
    );
}

// Usando com diferentes dados
function App() {
    return (
        <div>
            <CardUsuario
                nome="Ana Silva"
                cargo="Desenvolvedora"
                foto="/ana.jpg"
            />
            <CardUsuario
                nome="Carlos Lima"
                cargo="Designer"
                foto="/carlos.jpg"
            />
        </div>
    );
}
```

### useState (Estado)

O estado é a **memória** do componente. Quando muda, o React re-renderiza:

```jsx
import { useState } from 'react';

function Contador() {
    const [contagem, setContagem] = useState(0);

    return (
        <div>
            <p>Contagem: {contagem}</p>
            <button onClick={() => setContagem(contagem + 1)}>+1</button>
            <button onClick={() => setContagem(contagem - 1)}>-1</button>
            <button onClick={() => setContagem(0)}>Zerar</button>
        </div>
    );
}
```

**Regra de ouro:** Nunca altere o estado diretamente. Sempre use a função `set`:

```jsx
// ERRADO
contagem = contagem + 1;

// CERTO
setContagem(contagem + 1);
```

#### Estado com objetos e arrays

```jsx
// Estado com objeto
const [usuario, setUsuario] = useState({ nome: "", email: "" });

// Atualizar uma propriedade do objeto (spread)
setUsuario({ ...usuario, nome: "Maria" });

// Estado com array
const [tarefas, setTarefas] = useState([]);

// Adicionar item
setTarefas([...tarefas, novaTarefa]);

// Remover item por índice
setTarefas(tarefas.filter((_, i) => i !== indice));
```

### useEffect (Efeitos)

`useEffect` executa código em momentos específicos do ciclo de vida do componente:

```jsx
import { useState, useEffect } from 'react';

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    // Executa UMA vez quando o componente monta
    useEffect(() => {
        async function buscarDados() {
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
            const dados = await resposta.json();
            setUsuarios(dados);
            setCarregando(false);
        }
        buscarDados();
    }, []); // [] = executa só na montagem

    if (carregando) return <p>Carregando...</p>;

    return (
        <ul>
            {usuarios.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

| Dependência | Quando executa |
|---|---|
| `useEffect(() => {}, [])` | Uma vez (montagem) |
| `useEffect(() => {}, [valor])` | Quando `valor` muda |
| `useEffect(() => {})` | Toda renderização (cuidado!) |

### Renderização Condicional

```jsx
function Saudacao({ logado, nome }) {
    // Com if/else
    if (logado) {
        return <h1>Bem-vindo, {nome}!</h1>;
    }
    return <h1>Faça login para continuar</h1>;
}

// Com ternário
function Status({ ativo }) {
    return <span>{ativo ? "Ativo" : "Inativo"}</span>;
}

// Com && (mostrar só se verdadeiro)
function Alerta({ mensagem }) {
    return (
        <div>
            {mensagem && <p className="alerta">{mensagem}</p>}
        </div>
    );
}
```

### Renderização de Listas

```jsx
function ListaDeProdutos({ produtos }) {
    return (
        <ul>
            {produtos.map(produto => (
                <li key={produto.id}>
                    {produto.nome} — R$ {produto.preco.toFixed(2)}
                </li>
            ))}
        </ul>
    );
}
```

**Sempre use `key`** — O React precisa de uma chave única para cada item da lista para atualizar corretamente.

### Eventos e Formulários

```jsx
function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Enviando:", { nome, email });
        // Limpar campos
        setNome("");
        setEmail("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
}
```

### Comunicação entre Componentes

Os dados fluem de **pai para filho** via props. Para o filho comunicar algo ao pai, o pai envia uma **função como prop**:

```jsx
function Pai() {
    const [itens, setItens] = useState([]);

    function adicionarItem(novoItem) {
        setItens([...itens, novoItem]);
    }

    return (
        <div>
            <FormularioItem onAdicionar={adicionarItem} />
            <ListaItens itens={itens} />
        </div>
    );
}

function FormularioItem({ onAdicionar }) {
    const [texto, setTexto] = useState("");

    return (
        <div>
            <input value={texto} onChange={(e) => setTexto(e.target.value)} />
            <button onClick={() => { onAdicionar(texto); setTexto(""); }}>
                Adicionar
            </button>
        </div>
    );
}

function ListaItens({ itens }) {
    return (
        <ul>
            {itens.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );
}
```

## Dicas Importantes

1. **Componentes pequenos** — Cada componente faz uma coisa bem.
2. **Estado no lugar certo** — Coloque o estado no componente mais alto que precisa dele.
3. **Sempre use key nas listas** — E nunca use o índice como key se a lista pode mudar de ordem.
4. **Imutabilidade** — Nunca altere estado diretamente. Sempre crie cópias.
5. **useEffect com cuidado** — Sempre declare as dependências corretamente.
6. **DevTools** — Instale a extensão React Developer Tools no navegador.

## Exercícios

### Exercício 1 — Componente de Saudação
**Nível:** Fácil
**Enunciado:** Crie um componente que recebe `nome` via props e exibe "Olá, [nome]! Seja bem-vindo(a)."
**Dica:** Crie a função, receba props e use `{}` para interpolação.

### Exercício 2 — Contador com useState
**Nível:** Fácil
**Enunciado:** Crie um contador com botões +1, -1, +10, -10 e Zerar. Exiba o valor atual.
**Dica:** Um useState para o número e onClick em cada botão.

### Exercício 3 — Lista de Tarefas
**Nível:** Fácil
**Enunciado:** Crie um app de To-Do: input para digitar tarefa, botão adicionar, lista das tarefas e botão remover em cada uma.
**Dica:** Use um array no estado e `map()` para renderizar.

### Exercício 4 — Card de Perfil Reutilizável
**Nível:** Médio
**Enunciado:** Crie um componente Card que recebe nome, cargo, avatar e um array de habilidades. Renderize 3 cards diferentes na página.
**Dica:** Use desestruturação de props e `map()` para as habilidades.

### Exercício 5 — Busca com Filtro
**Nível:** Médio
**Enunciado:** Dada uma lista de 10 produtos, crie um campo de busca que filtra os produtos em tempo real enquanto o usuário digita.
**Dica:** Use um estado para o texto de busca e `filter()` no array antes de renderizar.

### Exercício 6 — Formulário com Validação
**Nível:** Médio
**Enunciado:** Crie um formulário de cadastro com nome, email e senha. Valide cada campo e exiba mensagens de erro. O botão só habilita quando tudo é válido.
**Dica:** Use um estado para cada campo e outro para os erros.

### Exercício 7 — Consumo de API
**Nível:** Médio
**Enunciado:** Consuma a API JSONPlaceholder (`/posts`) e exiba os 10 primeiros posts em cards. Adicione um botão "Carregar mais".
**Dica:** Use `useEffect` para o fetch e um estado para controlar quantos posts mostrar.

### Exercício 8 — Tema Dark/Light
**Nível:** Desafio
**Enunciado:** Crie um toggle de tema (claro/escuro) que altera as cores de toda a aplicação. Use Context API para disponibilizar o tema em todos os componentes.
**Dica:** Crie um ThemeContext, um ThemeProvider e use `useContext` nos componentes.

### Exercício 9 — Dashboard com Tabs
**Nível:** Desafio
**Enunciado:** Crie um dashboard com 3 abas (Visão Geral, Usuários, Configurações). Cada aba renderiza um componente diferente. Use React Router para as rotas.
**Dica:** Instale `react-router-dom` e use `Routes`, `Route` e `NavLink`.

### Exercício 10 — Carrinho de Compras Completo
**Nível:** Desafio
**Enunciado:** Crie um e-commerce mini com: página de produtos, botão adicionar ao carrinho, página do carrinho com quantidade editável, remoção de itens e total calculado.
**Dica:** Use Context API ou estado elevado no App para compartilhar o carrinho entre páginas.

## Recursos Adicionais

- [Documentação Oficial React](https://react.dev/) — Referência e tutoriais
- [React Dev Tools](https://react.dev/learn/react-developer-tools) — Extensão para debug
- [Vite](https://vitejs.dev/) — Ferramenta de build recomendada
