# Arquitetura de Software

## O que é Arquitetura de Software

Arquitetura de software é a estrutura fundamental de um sistema, composta por:

- Componentes
- Relacionamentos entre componentes
- Regras de interação
- Princípios que guiam o desenvolvimento

Ela define como o sistema é organizado.

## Principais características

- **Abstração:** define o sistema em alto nível, sem se prender a detalhes de implementação.
- **Separação de responsabilidades:** cada camada ou componente tem uma função bem definida.
- **Decisões de alto impacto:** escolhas arquiteturais são difíceis e custosas de reverter — por isso são feitas cedo.
- **Independente de tecnologia:** a arquitetura descreve a estrutura, não a linguagem ou o framework usados.
- **Documentada:** uma boa arquitetura é comunicada com diagramas (UML, C4 Model, ADRs).
- **Evolutiva:** uma arquitetura bem projetada permite crescer e mudar sem reescrever tudo.

---

## Objetivos da Arquitetura

Uma boa arquitetura busca:

**Escalabilidade** — Suportar crescimento.

> Exemplo: sistema com 100 usuários, depois 100.000 usuários.

**Manutenibilidade** — Facilidade de alterar o sistema.

> Exemplo: adicionar Pix em um sistema financeiro.

**Reutilização** — Componentes reaproveitáveis e modulares.

> Exemplo: módulo de autenticação, módulo de pagamentos.

**Testabilidade** — Permitir testes automatizados.

> Exemplo: testes unitários, testes de integração.

**Performance** — Eficiência do sistema.

> Exemplo: cache, filas, processamento assíncrono.

---

## Tipos de Arquitetura de Software

Existem vários estilos arquiteturais. Os principais:

- Arquitetura em Camadas
- MVC
- Arquitetura Hexagonal
- Clean Architecture
- Microservices
- Event Driven
- Serverless

---

## Arquitetura em Camadas (Layered Architecture)

É a arquitetura mais comum, de fácil aplicação e entendimento.

**Estrutura típica:**

```Exemplo
Apresentação (UI)
       ↓
  Aplicação
       ↓
   Domínio
       ↓
Infraestrutura
       ↓
Banco de dados
```

**Exemplo prático de um sistema web:**

```Exemplo
  React
    ↓
API Node ou C#
    ↓
Regras de negócio
    ↓
  Repository
    ↓
  Banco SQL
```

### Camadas

**Camada de apresentação** — Interface com usuário.

> Exemplos: React, HTML, Mobile.

**Camada de aplicação** — Coordena casos de uso.

> Exemplos: CriarPedido, RegistrarUsuario, GerarRelatorio.

**Camada de domínio** — Regras de negócio.

> Exemplos: Pedido não pode ter valor negativo; Usuário precisa ter CPF válido.

**Camada de infraestrutura** — Acesso a recursos externos.

> Exemplos: banco de dados, APIs externas, arquivos.

---

## MVC (Model View Controller)

É uma estrutura em três camadas com separação de responsabilidades. Muito usado em:

- PHP / Laravel
- Python / Django
- Ruby on Rails
- ASP.NET

**Estrutura:**

```Exemplo
Controller
    ↓
  Model
    ↓
  View
```

### Componentes

**Model** — Representa os dados.

```csharp
class Produto
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public decimal Preco { get; set; }
}
```

**View** — Interface visual. Em ambientes web é representado pelo HTML, CSS e demais recursos visuais e de interface.

**Controller** — Controla o fluxo.

```csharp
public IActionResult Listar()
{
    var produtos = repositorio.Listar();
    return View(produtos);
}
```

---

## Monólito vs Microservices

**Monólito** — Tudo em um único sistema:

- Frontend
- Backend
- Banco

Vantagens:

- Simples
- Fácil deploy
- Menos complexidade

Desvantagens:

- Difícil escalar partes específicas
- Código cresce demais

**Microservices** — Sistema dividido em serviços independentes.

Exemplo:

- Auth Service
- Pagamento Service
- Pedidos Service
- Estoque Service

Geralmente, cada serviço tem banco próprio e deploy independente.

---

## Arquitetura Hexagonal 

**Ideia central:** Separar o núcleo do sistema do mundo externo.

**Estrutura:**

```Exemplo
      API
       |
Adapter — Core — Adapter
       |
     Banco
```

O Core contém:

- Regras de negócio
- Entidades
- Casos de uso

Adapters conectam o sistema ao mundo externo.

Exemplos: banco de dados, API REST, CLI, fila.

