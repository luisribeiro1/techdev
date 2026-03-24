# Orientação a Objetos

## O que é Programação Orientada a Objetos

A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o software em objetos.

Um objeto representa algo do mundo real ou conceitual.

## Principais características

- **Encapsulamento:** os dados do objeto são protegidos e acessados por métodos controlados.
- **Herança:** uma classe pode herdar atributos e métodos de outra, evitando repetição de código.
- **Polimorfismo:** objetos de tipos diferentes respondem ao mesmo método de formas distintas.
- **Abstração:** expõe apenas o necessário ao usuário da classe, ocultando a complexidade interna.
- **Reutilização de código:** classes bem definidas podem ser usadas em múltiplos projetos.
- **Manutenibilidade:** alterações em uma classe não afetam o restante do sistema se a interface for preservada.
- **Modelagem do mundo real:** facilita representar entidades reais como objetos no código.

## Como configurar o ambiente (C#)

Os exemplos neste documento usam **C#**. Para executá-los:

```bash
# 1. Instale o .NET SDK em dotnet.microsoft.com
dotnet --version   # verificar instalação

# 2. Criar projeto console:
dotnet new console -n ProjetoPOO
cd ProjetoPOO
dotnet run
```

Editor recomendado: **VS Code** com extensão **C# Dev Kit**.

---

**Exemplos:**

- Mundo real: Carro → em software: Objeto Carro
- Mundo real: Pessoa → em software: Objeto Pessoa
- Mundo real: Conta bancária → em software: Objeto ContaBancaria

**Cada objeto possui:**

- Atributos → Dados ou características
- Métodos → Ações ou comportamentos

**Exemplo do mundo real — Carro:**

| Atributos | Métodos |
|---|---|
| cor | acelerar |
| modelo | frear |
| velocidade | |

---

## Classes

Uma classe é o molde para criar objetos. É a matriz ou o modelo que será usado na geração dos objetos.

**Analogia:**

- Classe = Planta de uma casa
- Objeto = Casa construída

Exemplo em C# com a criação da classe `Pessoa`:

```csharp
class Pessoa
{
    public string Nome;
    public int Idade;
}
```

Criando dois objetos diferentes da mesma classe:

```csharp
Pessoa p1 = new Pessoa();
p1.Nome = "Ana";
p1.Idade = 25;

Pessoa p2 = new Pessoa();
p2.Nome = "Carlos";
p2.Idade = 30;
```

---

## Atributos

Atributos representam dados da classe. São as características que identificam os objetos.

Exemplo em C#:

```csharp
class Produto
{
    public string Nome;
    public double Preco;
    public int Estoque;
}
```

O objeto criado:

```csharp
Produto p = new Produto();
p.Nome = "Notebook";
p.Preco = 3500;
p.Estoque = 10;
```

---

## Métodos

Métodos representam ações que o objeto pode realizar. São os comportamentos da classe.

Exemplo em C#:

```csharp
class Calculadora
{
    public int Somar(int a, int b)
    {
        return a + b;
    }
}
```

Como usar:

```csharp
Calculadora calc = new Calculadora();
int resultado = calc.Somar(5, 3);
Console.WriteLine(resultado);
// Resultado: 8
```

---

## Construtores

Construtores são métodos especiais usados na criação do objeto. Eles têm o mesmo nome da classe.

Exemplo em C#:

```csharp
class Pessoa
{
    public string Nome;
    public int Idade;

    public Pessoa(string nome, int idade)
    {
        Nome = nome;
        Idade = idade;
    }
}
```

Uso:

```csharp
Pessoa p = new Pessoa("João", 40);
```

---

## Encapsulamento

Encapsulamento significa proteger os dados do objeto. Em vez de acessar diretamente os atributos, usamos propriedades ou métodos.

**Problema sem encapsulamento:**

```csharp
class Conta
{
    public double Saldo;
}
```

Alguém poderia fazer `conta.Saldo = -1000`, o que não faz sentido.

**Com encapsulamento:**

```csharp
class Conta
{
    private double saldo;

    public void Depositar(double valor)
    {
        saldo += valor;
    }

    public void Sacar(double valor)
    {
        if (valor <= saldo)
            saldo -= valor;
    }

    public double GetSaldo()
    {
        return saldo;
    }
}
```

Uso:

```csharp
Conta c = new Conta();
c.Depositar(500);
c.Sacar(200);
Console.WriteLine(c.GetSaldo());
```

---

## Propriedades (Properties)

Em C# usamos muito properties para encapsular atributos de forma mais elegante.

Exemplo em C#:

```csharp
class Produto
{
    public string Nome { get; set; }
    public double Preco { get; set; }
}
```

Uso:

```csharp
Produto p = new Produto();
p.Nome = "Celular";
p.Preco = 1500;
```

---

## Abstração

Abstração significa mostrar apenas o que é importante.

**Exemplo:** Quando usamos um carro, sabemos acelerar e frear, mas não precisamos saber como funciona o motor.

Exemplo em código:

```csharp
class Impressora
{
    public void Imprimir()
    {
        Console.WriteLine("Imprimindo documento...");
    }
}
```

O usuário da classe não precisa saber como a impressão funciona internamente.

---

## Herança

Herança permite que uma classe herde características de outra.

```
Animal
   |
   ├── Cachorro
   └── Gato
```

**Classe base:**

```csharp
class Animal
{
    public string Nome;

    public void Dormir()
    {
        Console.WriteLine("Dormindo...");
    }
}
```

**Classe filha:**

```csharp
class Cachorro : Animal
{
    public void Latir()
    {
        Console.WriteLine("Au Au");
    }
}
```

Uso:

```csharp
Cachorro c = new Cachorro();
c.Nome = "Rex";
c.Dormir();
c.Latir();
```

---

## Polimorfismo

Polimorfismo significa mesma interface, comportamentos diferentes.

**Exemplo clássico:** animais fazem sons diferentes.

**Classe base:**

```csharp
class Animal
{
    public virtual void EmitirSom()
    {
        Console.WriteLine("Som genérico");
    }
}
```

**Classes derivadas:**

```csharp
class Cachorro : Animal
{
    public override void EmitirSom()
    {
        Console.WriteLine("Au Au");
    }
}

class Gato : Animal
{
    public override void EmitirSom()
    {
        Console.WriteLine("Miau");
    }
}
```

Uso:

```csharp
Animal a1 = new Cachorro();
Animal a2 = new Gato();
a1.EmitirSom();
a2.EmitirSom();
```

Saída:

```
Au Au
Miau
```

---

## Classes Abstratas

Classes abstratas não podem ser instanciadas. Elas servem como modelo para outras classes.

Exemplo em C#:

```csharp
abstract class Forma
{
    public abstract double CalcularArea();
}
```

**Classe concreta:**

```csharp
class Quadrado : Forma
{
    public double Lado;

    public override double CalcularArea()
    {
        return Lado * Lado;
    }
}
```

---

## Interfaces

Interfaces definem contratos. Ou seja: se implementar esta interface, deve implementar estes métodos.

**Interface:**

```csharp
interface IPagamento
{
    void Pagar(double valor);
}
```

**Implementação:**

```csharp
class CartaoCredito : IPagamento
{
    public void Pagar(double valor)
    {
        Console.WriteLine($"Pagamento de {valor} no cartão.");
    }
}
```

---

## Composição

Composição significa que uma classe possui outra classe dentro dela.

**Exemplo:** Pedido possui Cliente.

```csharp
class Cliente
{
    public string Nome { get; set; }
}

class Pedido
{
    public Cliente Cliente { get; set; }
}
```

Uso:

```csharp
Cliente c = new Cliente();
c.Nome = "Maria";

Pedido p = new Pedido();
p.Cliente = c;
```
