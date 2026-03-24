# Algoritmos

> Todo programa de computador é, no fundo, um conjunto de instruções organizadas — ou seja, um algoritmo.

## O que é um Algoritmo?

Um algoritmo é uma **sequência de passos** para resolver um problema. Você já segue algoritmos no dia a dia sem perceber:

- Uma receita de bolo é um algoritmo
- O caminho que você faz de casa até a escola é um algoritmo
- As instruções para montar um móvel são um algoritmo

Na programação, escrevemos algoritmos para dizer ao computador **exatamente** o que fazer, passo a passo.

## Para que serve?

Algoritmos são a **base de toda a programação**. Antes de aprender qualquer linguagem, você precisa saber pensar de forma lógica e organizar suas ideias em passos claros. Isso é chamado de **pensamento computacional**.

Com algoritmos você aprende a:

- Decompor problemas grandes em partes menores
- Identificar padrões que se repetem
- Criar soluções que funcionam para diversos casos
- Pensar de forma organizada e sequencial

## Principais características

- **Sequência:** As instruções são executadas uma após a outra, em ordem.
- **Decisão:** O algoritmo pode tomar caminhos diferentes dependendo de uma condição (se/senão).
- **Repetição:** Um bloco de instruções pode ser executado várias vezes (laços/loops).
- **Abstração:** Simplificar um problema ignorando detalhes desnecessários.
- **Decomposição:** Dividir um problema grande em partes menores e mais fáceis de resolver.
- **Padrões:** Identificar semelhanças entre problemas para reutilizar soluções.

## Ferramentas para praticar

Algoritmos podem ser escritos em **pseudocódigo** (linguagem informal) ou representados em **fluxogramas** (diagramas visuais) — nenhuma instalação necessária para começar.

**Para praticar com código real:**

- [VisuAlg](https://visualg3.com.br/) — ambiente em português para aprender algoritmos (gratuito)
- [Scratch](https://scratch.mit.edu/) — plataforma visual, ótima para iniciantes
- Qualquer editor de texto + navegador para JavaScript

**Para fluxogramas:**

- [draw.io](https://draw.io) — gratuito, roda no navegador, sem instalação

## Conceitos Fundamentais

### Variáveis

Uma variável é como uma **caixa com etiqueta** onde guardamos informações.

```
nome = "Maria"
idade = 25
altura = 1.65
estudante = verdadeiro
```

Cada variável tem:
- **Nome** (a etiqueta da caixa): `idade`
- **Valor** (o que está dentro): `25`
- **Tipo** (que tipo de coisa guarda): número inteiro

#### Tipos de dados mais comuns

| Tipo | O que guarda | Exemplo |
|---|---|---|
| Inteiro | Números sem decimal | `42`, `-7`, `0` |
| Real/Decimal | Números com decimal | `3.14`, `-0.5` |
| Texto (String) | Palavras e frases | `"Olá mundo"` |
| Lógico (Booleano) | Verdadeiro ou Falso | `verdadeiro`, `falso` |

### Entrada e Saída

Todo programa basicamente **recebe dados** (entrada), **processa** e **mostra resultados** (saída).

```
// Entrada: pedir informação ao usuário
escreva("Qual seu nome?")
leia(nome)

// Processamento: criar uma mensagem
mensagem = "Bem-vindo, " + nome + "!"

// Saída: mostrar o resultado
escreva(mensagem)
```

### Operadores

#### Operadores Aritméticos (matemática)

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| `+` | Soma | `5 + 3` | `8` |
| `-` | Subtração | `10 - 4` | `6` |
| `*` | Multiplicação | `6 * 2` | `12` |
| `/` | Divisão | `15 / 3` | `5` |
| `%` | Resto da divisão | `10 % 3` | `1` |

#### Operadores de Comparação (perguntas)

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| `==` | É igual a? | `5 == 5` | `verdadeiro` |
| `!=` | É diferente de? | `5 != 3` | `verdadeiro` |
| `>` | É maior que? | `10 > 7` | `verdadeiro` |
| `<` | É menor que? | `3 < 1` | `falso` |
| `>=` | É maior ou igual? | `5 >= 5` | `verdadeiro` |
| `<=` | É menor ou igual? | `4 <= 2` | `falso` |

#### Operadores Lógicos (combinações)

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| `E` | Ambos verdadeiros | `verdadeiro E falso` | `falso` |
| `OU` | Pelo menos um verdadeiro | `verdadeiro OU falso` | `verdadeiro` |
| `NAO` | Inverte o valor | `NAO verdadeiro` | `falso` |

### Estruturas Condicionais

Permitem que o programa **tome decisões**.

#### Se / Senão (if / else)

```
idade = 18

se (idade >= 18) entao
    escreva("Pode dirigir")
senao
    escreva("Não pode dirigir ainda")
fimse
```

Pense assim: é como uma **bifurcação na estrada**. Dependendo da condição, o programa segue por um caminho ou outro.

#### Se / Senão Se / Senão

Quando há mais de duas opções:

```
nota = 7.5

se (nota >= 9) entao
    escreva("Conceito A")
senao se (nota >= 7) entao
    escreva("Conceito B")
senao se (nota >= 5) entao
    escreva("Conceito C")
senao
    escreva("Reprovado")
fimse
```

### Estruturas de Repetição (Loops)

Permitem **repetir** um bloco de código várias vezes.

#### Enquanto (while)

Repete **enquanto** a condição for verdadeira:

```
contador = 1

enquanto (contador <= 5) faca
    escreva(contador)
    contador = contador + 1
fimenquanto

// Saída: 1 2 3 4 5
```

Analogia: é como dar voltas numa pista. Você continua correndo **enquanto** não completar todas as voltas.

#### Para (for)

Repete um **número definido** de vezes:

```
para i de 1 ate 10 faca
    escreva(i)
fimpara

// Saída: 1 2 3 4 5 6 7 8 9 10
```

#### Faça-Enquanto (do-while)

Executa pelo menos uma vez, depois verifica a condição:

```
faca
    escreva("Digite um número positivo: ")
    leia(numero)
enquanto (numero <= 0)
```

### Vetores (Arrays)

Um vetor é como uma **estante com prateleiras numeradas**. Cada prateleira guarda um valor.

```
notas[5] = {8.5, 7.0, 9.2, 6.8, 10.0}

// Acessar o primeiro elemento (posição 0):
escreva(notas[0])  // 8.5

// Acessar o terceiro elemento (posição 2):
escreva(notas[2])  // 9.2
```

A contagem começa do **zero**, não do um. Isso é padrão em quase todas as linguagens.

#### Percorrer um vetor

```
frutas[4] = {"Maçã", "Banana", "Laranja", "Uva"}

para i de 0 ate 3 faca
    escreva(frutas[i])
fimpara
```

### Funções

Uma função é um **bloco de código reutilizável** que faz uma tarefa específica.

```
funcao calcularMedia(nota1, nota2)
    media = (nota1 + nota2) / 2
    retorne media
fimfuncao

// Usando a função:
resultado = calcularMedia(8.0, 7.5)
escreva(resultado)  // 7.75
```

Pense em funções como **eletrodomésticos**: você coloca ingredientes (parâmetros), o aparelho processa, e devolve o resultado.

## Guia Prático: Resolvendo Problemas

### Passo 1 — Entenda o problema

Antes de escrever qualquer código, responda:
- O que o programa precisa **receber**?
- O que o programa precisa **fazer**?
- O que o programa precisa **mostrar**?

### Passo 2 — Planeje a solução

Escreva os passos em português antes de codificar:

```
Problema: Calcular se um aluno foi aprovado

1. Receber as 3 notas do aluno
2. Calcular a média das 3 notas
3. Se a média for >= 7, mostrar "Aprovado"
4. Senão, mostrar "Reprovado"
```

### Passo 3 — Codifique

Transforme o plano em pseudocódigo:

```
escreva("Digite a nota 1: ")
leia(nota1)
escreva("Digite a nota 2: ")
leia(nota2)
escreva("Digite a nota 3: ")
leia(nota3)

media = (nota1 + nota2 + nota3) / 3

se (media >= 7) entao
    escreva("Aprovado com média ", media)
senao
    escreva("Reprovado com média ", media)
fimse
```

### Passo 4 — Teste

Teste com diferentes valores para garantir que funciona.

## Dicas Importantes

1. **Comece simples** — Resolva problemas pequenos antes de atacar os grandes.
2. **Teste sempre** — Execute seu algoritmo mentalmente (trace) com valores diferentes.
3. **Cuidado com loops infinitos** — Sempre garanta que a condição de parada será atingida.
4. **Nomeie variáveis com clareza** — Use `idadeAluno` em vez de `x`.
5. **Decomponha** — Se o problema é grande, quebre em partes menores.

## Exercícios

### Exercício 1 — Olá, Mundo Personalizado
**Nível:** Fácil
**Enunciado:** Crie um algoritmo que peça o nome do usuário e exiba "Olá, [nome]! Bem-vindo à programação!".
**Dica:** Use leia() para capturar o nome e concatene com a mensagem.

### Exercício 2 — Calculadora de Idade
**Nível:** Fácil
**Enunciado:** Peça o ano de nascimento do usuário e calcule quantos anos ele tem (ou terá) no ano atual.
**Dica:** Subtraia o ano de nascimento do ano atual.

### Exercício 3 — Par ou Ímpar
**Nível:** Fácil
**Enunciado:** Leia um número e informe se ele é par ou ímpar.
**Dica:** Use o operador de resto da divisão (%). Se o resto por 2 for 0, é par.

### Exercício 4 — Maior de Três
**Nível:** Fácil
**Enunciado:** Leia 3 números e mostre qual é o maior entre eles.
**Dica:** Compare os números dois a dois usando condicionais.

### Exercício 5 — Tabuada
**Nível:** Médio
**Enunciado:** Peça um número ao usuário e exiba a tabuada completa (de 1 a 10) desse número.
**Dica:** Use um laço de repetição de 1 até 10.

### Exercício 6 — Contagem Regressiva
**Nível:** Médio
**Enunciado:** Crie um algoritmo que exiba uma contagem regressiva de 10 até 0, e ao final escreva "Feliz Ano Novo!".
**Dica:** Use um loop que começa em 10 e decrementa.

### Exercício 7 — Média da Turma
**Nível:** Médio
**Enunciado:** Leia as notas de 5 alunos, armazene em um vetor, calcule e exiba a média da turma.
**Dica:** Some todos os elementos do vetor e divida pela quantidade.

### Exercício 8 — Fatorial
**Nível:** Médio
**Enunciado:** Calcule o fatorial de um número digitado pelo usuário. Exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.
**Dica:** Use um loop que multiplica de N até 1.

### Exercício 9 — Fibonacci
**Nível:** Desafio
**Enunciado:** Exiba os primeiros 15 termos da sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
**Dica:** Cada número é a soma dos dois anteriores. Use duas variáveis auxiliares.

### Exercício 10 — Ordenação Simples
**Nível:** Desafio
**Enunciado:** Leia 5 números, armazene em um vetor e exiba-os em ordem crescente.
**Dica:** Pesquise sobre o algoritmo Bubble Sort — compare pares adjacentes e troque se necessário.

### Exercício 11 — Jogo da Adivinhação
**Nível:** Desafio
**Enunciado:** O programa escolhe um número entre 1 e 50. O usuário tenta adivinhar. A cada tentativa, informe se o número é "maior" ou "menor". Conte quantas tentativas foram necessárias.
**Dica:** Use um loop faça-enquanto que repete até o usuário acertar.

### Exercício 12 — Validação de Senha
**Nível:** Desafio
**Enunciado:** Crie um sistema que pede uma senha. O usuário tem 3 tentativas. Se acertar, exiba "Acesso liberado". Se errar 3 vezes, exiba "Acesso bloqueado".
**Dica:** Use um contador de tentativas e um loop com duas condições de parada.

## Recursos Adicionais

- [Visualgo](https://visualgo.net/) — Visualização interativa de algoritmos
- [Portugol Studio](https://dgadelha.github.io/Portugol-Webstudio/) — IDE online para pseudocódigo em português
- [Khan Academy - Algoritmos](https://pt.khanacademy.org/computing/computer-science/algorithms) — Curso gratuito
