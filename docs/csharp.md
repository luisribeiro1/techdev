# C#

> C# (lê-se "C Sharp") é uma linguagem poderosa, elegante e versátil. Do backend web aos jogos 3D, ela está em toda parte.

## O que é C#?

C# é uma **linguagem de programação orientada a objetos** criada pela Microsoft. É a principal linguagem do ecossistema .NET e é usada para criar aplicações desktop, web (ASP.NET), mobile (MAUI/Xamarin) e jogos (Unity).

## Para que serve?

- Desenvolvimento web com ASP.NET
- Aplicações desktop (Windows)
- Jogos com Unity
- APIs e microsserviços
- Aplicações mobile multiplataforma

## Conceitos Fundamentais

### Primeiro Programa

```csharp
// Program.cs (estilo moderno .NET 6+)
Console.WriteLine("Olá, Mundo!");
```

Ou no formato completo:

```csharp
using System;

namespace MeuApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Olá, Mundo!");
        }
    }
}
```

### Variáveis e Tipos

C# é uma linguagem **fortemente tipada** — você precisa declarar o tipo de cada variável:

```csharp
// Tipos básicos
string nome = "Maria";
int idade = 25;
double altura = 1.75;
decimal salario = 3500.50m;   // m indica decimal (precisão financeira)
bool ativo = true;
char inicial = 'M';

// Inferência de tipo (var)
var cidade = "São Paulo";  // o compilador deduz que é string
var numero = 42;           // deduz que é int

// Constantes
const double PI = 3.14159;
```

#### Tabela de Tipos

| Tipo | Descrição | Exemplo |
|---|---|---|
| `int` | Inteiro (32-bit) | `42` |
| `long` | Inteiro grande (64-bit) | `9999999999L` |
| `double` | Decimal (64-bit) | `3.14` |
| `decimal` | Decimal preciso (128-bit) | `99.90m` |
| `string` | Texto | `"Olá"` |
| `char` | Caractere único | `'A'` |
| `bool` | Verdadeiro/Falso | `true` |

### Entrada e Saída

```csharp
// Saída
Console.WriteLine("Texto com quebra de linha");
Console.Write("Texto sem quebra de linha");

// Interpolação de string
string nome = "Ana";
int idade = 20;
Console.WriteLine($"Nome: {nome}, Idade: {idade}");

// Entrada
Console.Write("Digite seu nome: ");
string nome = Console.ReadLine();

Console.Write("Digite sua idade: ");
int idade = int.Parse(Console.ReadLine());  // converte texto para inteiro

// Conversão segura
Console.Write("Digite um número: ");
if (int.TryParse(Console.ReadLine(), out int numero))
{
    Console.WriteLine($"Você digitou: {numero}");
}
else
{
    Console.WriteLine("Valor inválido!");
}
```

### Condicionais

```csharp
int nota = 7;

if (nota >= 9)
{
    Console.WriteLine("Excelente!");
}
else if (nota >= 7)
{
    Console.WriteLine("Aprovado");
}
else if (nota >= 5)
{
    Console.WriteLine("Recuperação");
}
else
{
    Console.WriteLine("Reprovado");
}

// Switch
string dia = "segunda";

switch (dia)
{
    case "segunda":
    case "terca":
    case "quarta":
    case "quinta":
    case "sexta":
        Console.WriteLine("Dia útil");
        break;
    case "sabado":
    case "domingo":
        Console.WriteLine("Fim de semana");
        break;
    default:
        Console.WriteLine("Dia inválido");
        break;
}
```

### Loops

```csharp
// for
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);  // 0, 1, 2, 3, 4
}

// while
int contador = 0;
while (contador < 3)
{
    Console.WriteLine(contador);
    contador++;
}

// do-while
do
{
    Console.Write("Digite um número positivo: ");
    numero = int.Parse(Console.ReadLine());
} while (numero <= 0);

// foreach (para coleções)
string[] frutas = { "Maçã", "Banana", "Laranja" };
foreach (string fruta in frutas)
{
    Console.WriteLine(fruta);
}
```

### Arrays e Listas

```csharp
// Array (tamanho fixo)
int[] numeros = { 1, 2, 3, 4, 5 };
string[] nomes = new string[3];
nomes[0] = "Ana";
nomes[1] = "Carlos";
nomes[2] = "Maria";

Console.WriteLine(numeros.Length); // 5

// List (tamanho dinâmico) — muito mais usado!
List<string> tarefas = new List<string>();
tarefas.Add("Estudar C#");
tarefas.Add("Fazer exercícios");
tarefas.Add("Revisar código");

tarefas.Remove("Fazer exercícios");
Console.WriteLine(tarefas.Count);    // 2
Console.WriteLine(tarefas.Contains("Estudar C#")); // True

// Dictionary (chave-valor)
Dictionary<string, int> idades = new Dictionary<string, int>();
idades["Ana"] = 25;
idades["Carlos"] = 30;

if (idades.ContainsKey("Ana"))
{
    Console.WriteLine($"Ana tem {idades["Ana"]} anos");
}
```

### Métodos (Funções)

```csharp
// Método simples
static void Saudacao(string nome)
{
    Console.WriteLine($"Olá, {nome}!");
}

// Método com retorno
static double CalcularMedia(double nota1, double nota2)
{
    return (nota1 + nota2) / 2;
}

// Método com parâmetro opcional
static void ExibirInfo(string nome, int idade = 0)
{
    Console.WriteLine(idade > 0
        ? $"{nome}, {idade} anos"
        : nome);
}

// Usando os métodos
Saudacao("Maria");
double media = CalcularMedia(8.0, 7.5);
ExibirInfo("Carlos");
ExibirInfo("Ana", 25);
```

### Programação Orientada a Objetos (POO)

#### Classes e Objetos

```csharp
public class Pessoa
{
    // Propriedades
    public string Nome { get; set; }
    public int Idade { get; set; }
    public string Email { get; set; }

    // Construtor
    public Pessoa(string nome, int idade, string email)
    {
        Nome = nome;
        Idade = idade;
        Email = email;
    }

    // Método
    public void Apresentar()
    {
        Console.WriteLine($"Olá, sou {Nome} e tenho {Idade} anos.");
    }
}

// Criando objetos
Pessoa aluno = new Pessoa("Carlos", 22, "carlos@email.com");
aluno.Apresentar();
Console.WriteLine(aluno.Email);
```

#### Herança

```csharp
public class Animal
{
    public string Nome { get; set; }

    public virtual void EmitirSom()
    {
        Console.WriteLine("...");
    }
}

public class Cachorro : Animal
{
    public override void EmitirSom()
    {
        Console.WriteLine("Au au!");
    }
}

public class Gato : Animal
{
    public override void EmitirSom()
    {
        Console.WriteLine("Miau!");
    }
}

// Usando
Animal dog = new Cachorro { Nome = "Rex" };
Animal cat = new Gato { Nome = "Mimi" };
dog.EmitirSom(); // "Au au!"
cat.EmitirSom(); // "Miau!"
```

#### Interfaces

```csharp
public interface INotificavel
{
    void EnviarNotificacao(string mensagem);
}

public class UsuarioEmail : INotificavel
{
    public string Email { get; set; }

    public void EnviarNotificacao(string mensagem)
    {
        Console.WriteLine($"Email para {Email}: {mensagem}");
    }
}

public class UsuarioSMS : INotificavel
{
    public string Telefone { get; set; }

    public void EnviarNotificacao(string mensagem)
    {
        Console.WriteLine($"SMS para {Telefone}: {mensagem}");
    }
}
```

### LINQ (Consultas em Coleções)

LINQ é um dos recursos mais poderosos do C#:

```csharp
List<int> numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Filtrar pares
var pares = numeros.Where(n => n % 2 == 0).ToList();
// [2, 4, 6, 8, 10]

// Transformar
var dobro = numeros.Select(n => n * 2).ToList();
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Ordenar
var ordenados = numeros.OrderByDescending(n => n).ToList();

// Agregar
int soma = numeros.Sum();
double media = numeros.Average();
int maximo = numeros.Max();

// Primeiro que atende condição
int primeiroPar = numeros.First(n => n % 2 == 0); // 2

// Com objetos
List<Pessoa> pessoas = new List<Pessoa> { /* ... */ };
var jovens = pessoas
    .Where(p => p.Idade < 25)
    .OrderBy(p => p.Nome)
    .Select(p => new { p.Nome, p.Idade })
    .ToList();
```

## Dicas Importantes

1. **Use `var` com moderação** — Quando o tipo é óbvio, use `var`. Quando não, declare o tipo explícito.
2. **Prefira `List<T>` a arrays** — Listas são mais flexíveis.
3. **Use TryParse para conversões** — Evita exceções quando o usuário digita algo inválido.
4. **Nomeie com PascalCase** — Métodos e propriedades: `CalcularMedia`. Variáveis locais: `camelCase`.
5. **Aprenda LINQ** — É extremamente poderoso e usado em todo projeto C#.
6. **Use interpolação de string** — `$"Olá, {nome}"` é mais legível que concatenação.

## Exercícios

### Exercício 1 — Calculadora Simples
**Nível:** Fácil
**Enunciado:** Crie um programa que leia dois números e uma operação (+, -, *, /) e exiba o resultado.
**Dica:** Use switch para a operação e TryParse para os números.

### Exercício 2 — Cadastro de Contatos
**Nível:** Fácil
**Enunciado:** Crie uma classe `Contato` com nome, telefone e email. Crie uma lista de contatos e permita adicionar e listar.
**Dica:** Use `List<Contato>` e um menu com switch.

### Exercício 3 — Média com Array
**Nível:** Fácil
**Enunciado:** Leia 5 notas, armazene em um array e exiba: maior nota, menor nota e média.
**Dica:** Use `Max()`, `Min()` e `Average()` do LINQ.

### Exercício 4 — Sistema de Notas com Classe
**Nível:** Médio
**Enunciado:** Crie classes `Aluno` (nome, lista de notas) e método `CalcularMedia()`. Crie 5 alunos e exiba quem foi aprovado (média >= 7).
**Dica:** Use LINQ Where para filtrar os aprovados.

### Exercício 5 — Herança com Veículos
**Nível:** Médio
**Enunciado:** Crie uma classe base `Veiculo` (marca, modelo, ano) e classes filhas `Carro` (portas) e `Moto` (cilindradas). Ambas devem ter um método `ExibirInfo()`.
**Dica:** Use `override` nos métodos das classes filhas.

### Exercício 6 — Lista de Tarefas
**Nível:** Médio
**Enunciado:** Crie um programa de console para gerenciar tarefas: adicionar, marcar como concluída, listar (pendentes e concluídas) e excluir.
**Dica:** Crie uma classe `Tarefa` com propriedade `Concluida` (bool).

### Exercício 7 — LINQ na Prática
**Nível:** Médio
**Enunciado:** Dada uma lista de produtos (nome, preço, categoria), use LINQ para: filtrar por categoria, ordenar por preço, calcular total e média por categoria.
**Dica:** Use Where, OrderBy, GroupBy e Sum.

### Exercício 8 — Interface de Pagamento
**Nível:** Desafio
**Enunciado:** Crie uma interface `IPagamento` com método `Pagar(decimal valor)`. Implemente em `PagamentoPix`, `PagamentoCartao` e `PagamentoBoleto`, cada um com lógica diferente.
**Dica:** Cada classe pode ter propriedades específicas (chave pix, número cartão).

### Exercício 9 — Sistema Bancário
**Nível:** Desafio
**Enunciado:** Crie classes `ContaBancaria` (titular, saldo) com métodos `Depositar`, `Sacar` e `Transferir`. Crie `ContaCorrente` e `ContaPoupanca` com regras diferentes.
**Dica:** Use herança e validações (não permitir saldo negativo).

### Exercício 10 — CRUD Completo em Console
**Nível:** Desafio
**Enunciado:** Crie um sistema completo de gerenciamento de produtos em console: Criar, Listar, Buscar por ID, Atualizar e Excluir. Armazene em uma `List<Produto>`.
**Dica:** Crie um menu loop com switch e métodos separados para cada operação.

## Recursos Adicionais

- [Microsoft Learn — C#](https://learn.microsoft.com/pt-br/dotnet/csharp/) — Documentação oficial
- [C# Tutorial W3Schools](https://www.w3schools.com/cs/) — Tutorial interativo
- [.NET Fiddle](https://dotnetfiddle.net/) — Teste C# online
