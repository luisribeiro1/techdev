# Modelagem de Dados

> Antes de escrever uma linha de código, precisamos pensar: quais informações o sistema precisa guardar? A modelagem de dados responde exatamente a essa pergunta.

## O que é Modelagem de Dados?

Modelagem de dados é o processo de **projetar a estrutura** de um banco de dados antes de criá-lo. É como fazer uma planta baixa de uma casa: você define os cômodos, as paredes e as conexões antes de começar a construção.

Sem uma modelagem adequada, os problemas aparecem cedo:
- Dados duplicados em vários lugares
- Dificuldade de fazer consultas simples
- Impossibilidade de garantir a integridade das informações
- Necessidade de refatorar tudo depois que o sistema já está em produção

Uma boa modelagem economiza semanas (ou meses) de trabalho futuro.

---

## As Três Etapas da Modelagem

A modelagem de dados para bancos relacionais segue **três etapas progressivas**:

```Exemplo
Requisitos → [Modelo Conceitual] → [Modelo Lógico] → [Modelo Físico] → Banco de Dados
```

Cada etapa adiciona mais detalhes técnicos e se aproxima mais da implementação real.

---

## Etapa 1 — Modelo Conceitual (O quê?)

O modelo conceitual é a visão de **mais alto nível**: representa o mundo real sem se preocupar com tecnologia. É criado junto com o cliente ou usuário, usando uma linguagem próxima da realidade do negócio.

A ferramenta mais usada aqui é o **Diagrama Entidade-Relacionamento (DER)**, criado por Peter Chen em 1976.

### Conceitos do Modelo Conceitual

**Entidade**
É qualquer "coisa" sobre a qual precisamos armazenar informações. Representa substantivos do mundo real.

```Exemplo
Exemplos de entidades:
- ALUNO
- PROFESSOR
- DISCIPLINA
- PRODUTO
- PEDIDO
- CLIENTE
```

**Atributo**
São as características de uma entidade — o que queremos saber sobre ela.

```Exemplo
ALUNO
├── nome
├── data_nascimento
├── cpf
├── email
└── telefone
```

**Tipos de atributos:**
- **Simples:** um único valor (nome, cpf)
- **Composto:** formado por partes (endereço = rua + número + cidade + CEP)
- **Multivalorado:** pode ter vários valores (telefone — uma pessoa pode ter vários)
- **Derivado:** calculado a partir de outro (idade, calculada da data_nascimento)
- **Chave (identificador):** identifica unicamente cada ocorrência (cpf, matrícula)

**Relacionamento**
É a associação entre duas ou mais entidades. Representa verbos do mundo real.

```Exemplo
ALUNO ──── está matriculado em ──── DISCIPLINA
PROFESSOR ──── leciona ──── DISCIPLINA
CLIENTE ──── faz ──── PEDIDO
```

### Cardinalidade

A cardinalidade descreve **quantas ocorrências** de uma entidade se relacionam com outra.

| Notação | Significado |
|---|---|
| 1:1 | Um para um |
| 1:N | Um para muitos |
| N:N | Muitos para muitos |

**Exemplo 1:1 — CPF e Pessoa**
Uma pessoa possui exatamente um CPF, e um CPF pertence a exatamente uma pessoa.

```Exemplo
PESSOA (1) ──── possui ──── (1) CPF
```

**Exemplo 1:N — Departamento e Funcionário**
Um departamento pode ter vários funcionários, mas cada funcionário pertence a um único departamento.

```Exemplo
DEPARTAMENTO (1) ──── contém ──── (N) FUNCIONÁRIO
```

**Exemplo N:N — Aluno e Disciplina**
Um aluno pode se matricular em várias disciplinas, e uma disciplina pode ter vários alunos.

```Exemplo
ALUNO (N) ──── matriculado em ──── (N) DISCIPLINA
```

### Entidade Fraca

Uma entidade fraca **não pode existir sem** outra entidade. Sua identificação depende da entidade "forte".

```Exemplo
Exemplo: ITEM_PEDIDO depende de PEDIDO
- Um item de pedido sem o pedido correspondente não faz sentido
- A chave de ITEM_PEDIDO inclui a chave de PEDIDO
```

### Especialização e Generalização

Quando entidades compartilham atributos comuns, usamos hierarquia:

```Exemplo
          PESSOA
         /      \
    ALUNO      PROFESSOR
   (matrícula)  (registro)
```

PESSOA tem os atributos comuns (nome, cpf). ALUNO e PROFESSOR herdam esses atributos e adicionam os próprios.

---

## Etapa 2 — Modelo Lógico (Como organizar?)

O modelo lógico **traduz o modelo conceitual** para a estrutura do banco relacional, mas ainda sem depender de um SGBD específico (MySQL, PostgreSQL, SQL Server...).

Aqui trabalhamos com **tabelas, colunas, chaves e relacionamentos**.

### Regras de Conversão

**Regra 1: Entidade → Tabela**
Cada entidade vira uma tabela. Os atributos viram colunas.

```Exemplo
Entidade CLIENTE → Tabela cliente
  - id_cliente  (chave primária)
  - nome
  - email
  - cpf
  - telefone
```

**Regra 2: Chave Primária (PK)**
Todo registro precisa ser identificado de forma única. A chave primária garante isso.

```sql
-- Exemplo de definição de PK
id_cliente INT PRIMARY KEY
-- ou usando código natural único:
cpf CHAR(11) PRIMARY KEY
```

**Regra 3: Relacionamento 1:N → Chave Estrangeira**
O lado "muitos" recebe a chave do lado "um" como **chave estrangeira (FK)**.

```Exemplo
DEPARTAMENTO (1) ──── (N) FUNCIONÁRIO

Tabela departamento:
  id_departamento (PK)
  nome

Tabela funcionario:
  id_funcionario (PK)
  nome
  id_departamento (FK) ← recebe a PK de departamento
```

**Regra 4: Relacionamento N:N → Tabela Associativa**
Relacionamentos muitos-para-muitos precisam de uma **tabela intermediária**.

```Exemplo
ALUNO (N) ──── matriculado em ──── (N) DISCIPLINA

Tabela aluno:
  id_aluno (PK)
  nome

Tabela disciplina:
  id_disciplina (PK)
  nome

Tabela matricula: ← tabela associativa
  id_aluno (FK)
  id_disciplina (FK)
  data_matricula
  nota_final
  PRIMARY KEY (id_aluno, id_disciplina) ← chave composta
```

**Regra 5: Relacionamento 1:1**
A FK fica na tabela da entidade mais dependente, ou podem ser fundidas em uma só.

```Exemplo
FUNCIONARIO (1) ──── (1) CARTEIRA_PONTO

Opção A: manter separadas
  funcionario: id_funcionario (PK), nome
  carteira_ponto: id_carteira (PK), id_funcionario (FK UNIQUE), numero

Opção B: fundir
  funcionario: id_funcionario (PK), nome, numero_carteira
```

### Chave Natural vs. Chave Surrogate

| Tipo | O que é | Quando usar |
|---|---|---|
| **Natural** | Dado real do domínio (CPF, CNPJ, ISBN) | Quando existe um identificador único já estabelecido |
| **Surrogate** | ID artificial gerado pelo sistema (1, 2, 3...) | Quando não há chave natural confiável ou ela é muito longa |

Na prática, a maioria dos sistemas usa **surrogate keys** (geralmente `id INT AUTO_INCREMENT` ou `UUID`).

### Integridade Referencial

A integridade referencial garante que **não existam referências inválidas**. Uma FK deve sempre apontar para um registro existente.

```sql
-- Não posso inserir um funcionário com id_departamento = 99
-- se o departamento 99 não existe
INSERT INTO funcionario (nome, id_departamento) VALUES ('Ana', 99); -- ERRO!
```

Comportamentos ao excluir o registro pai:

| Ação | O que acontece com os filhos |
|---|---|
| `RESTRICT` | Bloqueia a exclusão se houver filhos |
| `CASCADE` | Exclui os filhos automaticamente |
| `SET NULL` | Define a FK dos filhos como NULL |
| `SET DEFAULT` | Define a FK dos filhos com valor padrão |

---

## Etapa 3 — Modelo Físico (Como implementar?)

O modelo físico é a **implementação real** no SGBD escolhido. Aqui escrevemos o SQL que cria as tabelas.

Nesta etapa, consideramos:
- Tipos de dados específicos do banco (INT, VARCHAR, DATE, DECIMAL...)
- Índices para otimizar consultas
- Constraints (restrições) de validação
- Configurações de performance

### Exemplo Completo — Sistema de Biblioteca

**Modelo Conceitual:**
```Exemplo
LIVRO ──── escrito por ──── AUTOR (N:N)
LIVRO ──── pertence a ──── CATEGORIA (N:1)
EMPRESTIMO ──── envolve ──── LIVRO (N:1)
EMPRESTIMO ──── feito por ──── USUARIO (N:1)
```

**Modelo Lógico:**
```Exemplo
livro (id_livro PK, titulo, ano_publicacao, isbn, id_categoria FK)
autor (id_autor PK, nome, nacionalidade)
livro_autor (id_livro FK, id_autor FK) ← tabela associativa
categoria (id_categoria PK, nome, descricao)
usuario (id_usuario PK, nome, email, cpf, data_cadastro)
emprestimo (id_emprestimo PK, id_livro FK, id_usuario FK, data_emprestimo, data_devolucao_prevista, data_devolucao_real)
```

**Modelo Físico (SQL):**
```sql
CREATE TABLE categoria (
    id_categoria  INT           NOT NULL AUTO_INCREMENT,
    nome          VARCHAR(100)  NOT NULL,
    descricao     TEXT,
    PRIMARY KEY (id_categoria)
);

CREATE TABLE autor (
    id_autor      INT           NOT NULL AUTO_INCREMENT,
    nome          VARCHAR(150)  NOT NULL,
    nacionalidade VARCHAR(80),
    PRIMARY KEY (id_autor)
);

CREATE TABLE livro (
    id_livro      INT           NOT NULL AUTO_INCREMENT,
    titulo        VARCHAR(200)  NOT NULL,
    ano_publicacao YEAR,
    isbn          CHAR(13)      UNIQUE,
    id_categoria  INT,
    PRIMARY KEY (id_livro),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE livro_autor (
    id_livro  INT NOT NULL,
    id_autor  INT NOT NULL,
    PRIMARY KEY (id_livro, id_autor),
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro) ON DELETE CASCADE,
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor) ON DELETE CASCADE
);

CREATE TABLE usuario (
    id_usuario    INT          NOT NULL AUTO_INCREMENT,
    nome          VARCHAR(150) NOT NULL,
    email         VARCHAR(200) NOT NULL UNIQUE,
    cpf           CHAR(11)     NOT NULL UNIQUE,
    data_cadastro DATE         NOT NULL DEFAULT (CURRENT_DATE),
    PRIMARY KEY (id_usuario)
);

CREATE TABLE emprestimo (
    id_emprestimo             INT  NOT NULL AUTO_INCREMENT,
    id_livro                  INT  NOT NULL,
    id_usuario                INT  NOT NULL,
    data_emprestimo           DATE NOT NULL DEFAULT (CURRENT_DATE),
    data_devolucao_prevista   DATE NOT NULL,
    data_devolucao_real       DATE,
    PRIMARY KEY (id_emprestimo),
    FOREIGN KEY (id_livro)   REFERENCES livro(id_livro),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
```

---

## Normalização

Normalização é o processo de **organizar as tabelas** para eliminar redundâncias e inconsistências. É dividida em "Formas Normais" (FN).

### Por que normalizar?

Imagine uma tabela assim:

| id_pedido | cliente | email_cliente | produto | categoria | preco |
|---|---|---|---|---|---|
| 1 | Ana Silva | ana@email.com | Mouse | Informática | 89.90 |
| 2 | Ana Silva | ana@email.com | Teclado | Informática | 159.90 |
| 3 | João Souza | joao@email.com | Monitor | Informática | 899.00 |

Problemas:
- Nome e email de Ana aparecem duas vezes (redundância)
- Se Ana mudar o email, precisamos atualizar várias linhas (anomalia de atualização)
- Se excluir o pedido 3, perdemos os dados do João (anomalia de exclusão)

### Primeira Forma Normal (1FN)

**Regra:** Cada célula deve conter um único valor atômico (indivisível). Sem grupos repetitivos.

```Exemplo
❌ Errado:
PEDIDO: id=1, cliente="Ana", produtos="Mouse, Teclado, Cabo USB"

✅ Correto:
PEDIDO: id=1, cliente="Ana"
ITEM_PEDIDO: id=1, id_pedido=1, produto="Mouse"
ITEM_PEDIDO: id=2, id_pedido=1, produto="Teclado"
ITEM_PEDIDO: id=3, id_pedido=1, produto="Cabo USB"
```

### Segunda Forma Normal (2FN)

**Regra:** Deve estar na 1FN e todos os atributos não-chave devem depender **completamente** da chave primária (elimina dependências parciais — só existe quando há chave composta).

```Exemplo
❌ Errado (chave composta: id_pedido + id_produto):
ITEM_PEDIDO: id_pedido, id_produto, quantidade, nome_produto, categoria_produto
             ←─ chave ─→             ↑                ↑↑ dependem só de id_produto
                                  OK aqui              PROBLEMA aqui

✅ Correto:
ITEM_PEDIDO: id_pedido (FK), id_produto (FK), quantidade
PRODUTO: id_produto (PK), nome_produto, categoria_produto
```

### Terceira Forma Normal (3FN)

**Regra:** Deve estar na 2FN e nenhum atributo não-chave deve depender de outro atributo não-chave (elimina dependências transitivas).

```Exemplo
❌ Errado:
FUNCIONARIO: id_func, nome, id_depto, nome_depto, cidade_depto
                             ↑─────── nome_depto e cidade_depto dependem de id_depto, não de id_func

✅ Correto:
FUNCIONARIO: id_func, nome, id_depto (FK)
DEPARTAMENTO: id_depto (PK), nome_depto, cidade_depto
```

### Resumo das Formas Normais

| Forma Normal | O que elimina |
|---|---|
| **1FN** | Valores múltiplos em uma célula / grupos repetitivos |
| **2FN** | Dependências parciais da chave (chaves compostas) |
| **3FN** | Dependências transitivas entre atributos |
| **FNBC** | Anomalias residuais da 3FN em casos especiais |

> **Dica prática:** Para a maioria dos sistemas, chegar na **3FN é suficiente**. Normalização além disso raramente é necessária e pode até prejudicar a performance.

---

## Desnormalização (Quando e por quê)

A desnormalização é o processo **inverso**: introduzimos controladamente alguma redundância para ganhar performance em consultas.

```Exemplo
Situação: Em um e-commerce com milhões de pedidos, calcular o total
de cada pedido (somando todos os itens) em tempo real é lento.

Solução desnormalizada: adicionar coluna valor_total na tabela PEDIDO
e atualizá-la sempre que um item é adicionado/removido.
```

Use com cautela: desnormalização aumenta a complexidade de manutenção.

---

## Índices

Índices funcionam como o **índice de um livro**: em vez de ler página por página, você salta direto para onde está a informação.

```sql
-- Sem índice: o banco varre todos os registros
SELECT * FROM usuario WHERE email = 'ana@email.com';
-- Com tabela de 1 milhão de registros: pode levar segundos

-- Criando índice no campo email
CREATE INDEX idx_usuario_email ON usuario(email);
-- Agora a mesma consulta pode ser executada em milissegundos
```

**Quando criar índices:**
- Colunas usadas frequentemente em `WHERE`
- Colunas usadas em `JOIN`
- Colunas usadas em `ORDER BY` com grandes volumes

**Cuidado:** Índices aceleram leitura mas **tornam escrita mais lenta** (o índice precisa ser atualizado). Não crie índices em tudo.

---

## Diagrama Entidade-Relacionamento — Notações

Existem várias notações para desenhar DERs. As mais comuns:

**Notação de Peter Chen (clássica):**
- Retângulos = Entidades
- Elipses = Atributos
- Losangos = Relacionamentos
- Linhas com 1, N, M = Cardinalidade

**Notação Pé de Galinha (Crow's Foot) — mais usada atualmente:**
```Exemplo
CLIENTE ────<  PEDIDO
         1    N
```
- `|` = um (obrigatório)
- `O` = zero (opcional)
- `<` = muitos
- Combinações: `||` (exatamente um), `O|` (zero ou um), `|<` (um ou mais), `O<` (zero ou mais)

**Ferramentas para modelagem:**
- **brModelo** — gratuita, em português, ideal para estudantes
- **draw.io / diagrams.net** — gratuita, online, fácil de usar
- **MySQL Workbench** — gratuita, gera SQL automaticamente
- **dbdiagram.io** — online, permite descrever o esquema em texto
- **Lucidchart** — pago, muito usado em empresas

---

## Dicas Importantes

1. **Sempre comece pelo modelo conceitual** — entender o negócio antes de pensar em tabelas é fundamental.

2. **Use nomes significativos** — `cliente` e `id_cliente` são muito melhores que `tb1` e `cod`.

3. **Documente os relacionamentos** — anote a cardinalidade e o significado de cada FK.

4. **Cuidado com NULLs** — defina quais colunas são obrigatórias (`NOT NULL`) e quais são opcionais.

5. **Revise com quem conhece o negócio** — o modelo conceitual deve ser validado com o cliente ou especialista do domínio.

6. **Modelagem é iterativa** — é normal revisar e corrigir o modelo à medida que você aprende mais sobre o negócio.

---

## Exercícios

### Exercício 1 — Identificando Entidades
**Nível:** Fácil

**Enunciado:** Leia a descrição abaixo e identifique todas as entidades e seus atributos principais:

*"Uma clínica veterinária precisa de um sistema para controlar os atendimentos. Ela atende animais de estimação. Cada animal tem um tutor (dono). Os veterinários realizam consultas. Em cada consulta, são registrados os sintomas, diagnóstico e medicamentos receitados."*

**Dica:** Procure pelos substantivos: quem ou o quê precisa ter dados armazenados?

---

### Exercício 2 — Cardinalidade
**Nível:** Fácil

**Enunciado:** Para cada relacionamento abaixo, defina a cardinalidade (1:1, 1:N ou N:N):

1. País ↔ Capital
2. Mãe ↔ Filhos
3. Aluno ↔ Disciplina (em uma escola)
4. Produto ↔ Categoria (um produto tem uma categoria, uma categoria tem vários produtos)
5. Médico ↔ Paciente (em um hospital geral)
6. Livro ↔ Autor (considerando coautoria)

**Dica:** Pense em voz alta: "Um [A] pode ter quantos [B]? Um [B] pode ter quantos [A]?"

---

### Exercício 3 — Modelo Lógico de uma Escola
**Nível:** Médio

**Enunciado:** Crie o modelo lógico (tabelas com colunas, PKs e FKs) para um sistema escolar com as seguintes regras:

- Uma escola tem vários cursos
- Cada curso tem várias disciplinas
- Cada disciplina pertence a um único curso
- Alunos se matriculam em disciplinas (com nota e frequência)
- Cada disciplina tem um único professor responsável
- Professores podem lecionar várias disciplinas

**Dica:** Identifique os relacionamentos N:N — eles precisarão de tabelas associativas.

---

### Exercício 4 — Normalização
**Nível:** Médio

**Enunciado:** A tabela abaixo não está normalizada. Identifique os problemas e reestruture para a 3FN:

| id_venda | data | cliente | cidade_cliente | produto | categoria | preco_unit | qtd | total |
|---|---|---|---|---|---|---|---|---|
| 1 | 2024-01-10 | Ana | São Paulo | Mouse | Periférico | 89.90 | 2 | 179.80 |
| 2 | 2024-01-10 | Ana | São Paulo | Teclado | Periférico | 159.90 | 1 | 159.90 |
| 3 | 2024-01-11 | Bruno | Rio | Monitor | Vídeo | 899.00 | 1 | 899.00 |

**Dica:** Qual o problema de ter o nome e cidade de Ana repetidos? De onde vem o valor `total`?

---

### Exercício 5 — Modelo Físico
**Nível:** Médio

**Enunciado:** Escreva o SQL (`CREATE TABLE`) para o modelo lógico abaixo de um sistema de eventos:

```Exemplo
evento (id_evento PK, nome, data, local, capacidade_maxima)
participante (id_participante PK, nome, email UNIQUE, telefone)
inscricao (id_evento FK, id_participante FK, data_inscricao, confirmado BOOLEAN)
  PK: (id_evento, id_participante)
```

**Dica:** Lembre-se das constraints: `NOT NULL`, `UNIQUE`, `DEFAULT`, `FOREIGN KEY`.

---

### Exercício 6 — Sistema de E-commerce
**Nível:** Desafio

**Enunciado:** Projete o modelo completo (conceitual → lógico → físico) para um e-commerce simplificado com as seguintes funcionalidades:

- Cadastro de clientes com endereços (um cliente pode ter vários endereços)
- Catálogo de produtos com categorias (um produto pode estar em várias categorias)
- Carrinho de compras
- Pedidos com status (pendente, pago, enviado, entregue, cancelado)
- Cada pedido tem um endereço de entrega (escolhido dentre os do cliente)
- Histórico de alterações de status dos pedidos

**Dica:** Comece mapeando as entidades e os relacionamentos. Só depois pense nas tabelas. O status com histórico pode precisar de uma tabela separada.

---

### Exercício 7 — Identificando Anomalias
**Nível:** Desafio

**Enunciado:** Dado o esquema abaixo (que funciona, mas tem problemas), identifique todos os problemas de design e proponha uma versão melhorada:

```sql
CREATE TABLE tudo_junto (
    id           INT PRIMARY KEY,
    aluno_nome   VARCHAR(100),
    aluno_cpf    CHAR(11),
    curso_nome   VARCHAR(100),
    disc_nome    VARCHAR(100),
    disc_carga   INT,
    prof_nome    VARCHAR(100),
    prof_email   VARCHAR(200),
    nota         DECIMAL(4,2),
    semestre     VARCHAR(10)
);
```

**Dica:** Pense: se um professor mudar de email, quantas linhas precisamos atualizar? E se um aluno fizer 10 disciplinas com o mesmo professor?

---

## Recursos Adicionais

- **brModelo** (ferramenta gratuita para modelagem): disponível em brmodelo.com.br
- **MySQL Workbench** (modelagem visual com geração de SQL): mysql.com/products/workbench
- **dbdiagram.io** (modelagem online rápida): dbdiagram.io
- **Livro recomendado:** "Sistemas de Banco de Dados" — Ramez Elmasri e Shamkant Navathe
- **Livro recomendado:** "Projeto de Banco de Dados" — Carlos Alberto Heuser
