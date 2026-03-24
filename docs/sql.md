# SQL

> SQL é a linguagem universal dos bancos de dados. Se os dados são o petróleo da era digital, SQL é a ferramenta para extraí-los.

## O que é SQL?

SQL significa **Structured Query Language** (Linguagem de Consulta Estruturada). É a linguagem usada para **criar, consultar, atualizar e excluir** dados em bancos de dados relacionais.

Bancos como MySQL, PostgreSQL, SQL Server e SQLite usam SQL.

## Para que serve?

- Armazenar dados de forma organizada em tabelas
- Consultar informações específicas rapidamente
- Atualizar e excluir registros
- Relacionar dados entre tabelas diferentes
- Gerar relatórios e análises

## Conceitos Fundamentais

### O que é um Banco de Dados Relacional?

Imagine uma **planilha do Excel** — cada aba é uma tabela, cada coluna é um campo e cada linha é um registro.

```
Tabela: alunos
+----+--------+-------+------------------+
| id | nome   | idade | email            |
+----+--------+-------+------------------+
|  1 | Ana    |    20 | ana@email.com    |
|  2 | Carlos |    22 | carlos@email.com |
|  3 | Maria  |    19 | maria@email.com  |
+----+--------+-------+------------------+
```

### Criando o Banco e Tabelas

```sql
-- Criar o banco de dados
CREATE DATABASE escola;

-- Usar o banco
USE escola;

-- Criar tabela de alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    email VARCHAR(150) UNIQUE,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de cursos
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT,
    preco DECIMAL(10, 2)
);
```

#### Tipos de dados mais usados

| Tipo | O que guarda | Exemplo |
|---|---|---|
| `INT` | Números inteiros | `42`, `-7` |
| `DECIMAL(10,2)` | Números decimais | `99.90` |
| `VARCHAR(100)` | Texto variável (até N chars) | `"Maria"` |
| `TEXT` | Texto longo | Descrições, comentários |
| `DATE` | Data | `2025-03-15` |
| `DATETIME` | Data e hora | `2025-03-15 14:30:00` |
| `BOOLEAN` | Verdadeiro/Falso | `TRUE`, `FALSE` |

### INSERT — Inserir Dados

```sql
-- Inserir um registro
INSERT INTO alunos (nome, idade, email)
VALUES ('Ana Silva', 20, 'ana@email.com');

-- Inserir vários de uma vez
INSERT INTO alunos (nome, idade, email) VALUES
    ('Carlos Lima', 22, 'carlos@email.com'),
    ('Maria Santos', 19, 'maria@email.com'),
    ('Pedro Oliveira', 21, 'pedro@email.com'),
    ('Julia Costa', 23, 'julia@email.com');
```

### SELECT — Consultar Dados

O comando mais usado do SQL:

```sql
-- Selecionar tudo
SELECT * FROM alunos;

-- Selecionar colunas específicas
SELECT nome, email FROM alunos;

-- Com condição (WHERE)
SELECT * FROM alunos WHERE idade >= 21;

-- Com ordenação
SELECT * FROM alunos ORDER BY nome ASC;   -- A-Z
SELECT * FROM alunos ORDER BY idade DESC;  -- maior para menor

-- Limitar resultados
SELECT * FROM alunos LIMIT 5;

-- Contar registros
SELECT COUNT(*) FROM alunos;

-- Sem duplicatas
SELECT DISTINCT idade FROM alunos;
```

#### Operadores no WHERE

```sql
-- Comparação
SELECT * FROM alunos WHERE idade = 20;
SELECT * FROM alunos WHERE idade != 20;
SELECT * FROM alunos WHERE idade > 18;
SELECT * FROM alunos WHERE idade BETWEEN 18 AND 25;

-- Texto
SELECT * FROM alunos WHERE nome LIKE 'A%';      -- começa com A
SELECT * FROM alunos WHERE nome LIKE '%silva%';  -- contém "silva"
SELECT * FROM alunos WHERE email LIKE '%@gmail%';

-- Lista
SELECT * FROM alunos WHERE idade IN (18, 20, 22);

-- Nulo
SELECT * FROM alunos WHERE email IS NULL;
SELECT * FROM alunos WHERE email IS NOT NULL;

-- Combinando condições
SELECT * FROM alunos WHERE idade >= 18 AND idade <= 25;
SELECT * FROM alunos WHERE nome LIKE 'A%' OR nome LIKE 'M%';
```

### UPDATE — Atualizar Dados

```sql
-- Atualizar um campo
UPDATE alunos SET idade = 21 WHERE id = 1;

-- Atualizar vários campos
UPDATE alunos SET nome = 'Ana Maria', email = 'anamaria@email.com' WHERE id = 1;

-- CUIDADO: sem WHERE atualiza TODOS os registros!
-- UPDATE alunos SET idade = 20;  -- Isso muda TODOS!
```

### DELETE — Excluir Dados

```sql
-- Excluir um registro
DELETE FROM alunos WHERE id = 3;

-- Excluir com condição
DELETE FROM alunos WHERE idade < 18;

-- CUIDADO: sem WHERE exclui TUDO!
-- DELETE FROM alunos;  -- Apaga todos os registros!
```

### Funções de Agregação

```sql
-- Contar
SELECT COUNT(*) AS total_alunos FROM alunos;

-- Soma
SELECT SUM(preco) AS valor_total FROM cursos;

-- Média
SELECT AVG(idade) AS media_idade FROM alunos;

-- Maior e menor valor
SELECT MAX(idade) AS mais_velho, MIN(idade) AS mais_novo FROM alunos;

-- Agrupando (GROUP BY)
SELECT idade, COUNT(*) AS quantidade
FROM alunos
GROUP BY idade;

-- Filtrar grupos (HAVING)
SELECT idade, COUNT(*) AS quantidade
FROM alunos
GROUP BY idade
HAVING COUNT(*) > 1;
```

### Relacionamentos e JOIN

Tabelas se conectam através de **chaves estrangeiras**:

```sql
-- Criar tabela de matrículas (relaciona aluno com curso)
CREATE TABLE matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    curso_id INT,
    data_matricula DATE,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);
```

#### INNER JOIN — Dados que existem em ambas as tabelas

```sql
SELECT
    alunos.nome AS aluno,
    cursos.nome AS curso,
    matriculas.data_matricula
FROM matriculas
INNER JOIN alunos ON matriculas.aluno_id = alunos.id
INNER JOIN cursos ON matriculas.curso_id = cursos.id;
```

#### LEFT JOIN — Todos da esquerda, mesmo sem correspondência

```sql
-- Todos os alunos, mesmo os sem matrícula
SELECT
    alunos.nome,
    cursos.nome AS curso
FROM alunos
LEFT JOIN matriculas ON alunos.id = matriculas.aluno_id
LEFT JOIN cursos ON matriculas.curso_id = cursos.id;
```

#### Diferença visual entre JOINs

```
INNER JOIN: Só quem tem match nas duas tabelas
LEFT JOIN:  Todos da tabela esquerda + matches da direita
RIGHT JOIN: Todos da tabela direita + matches da esquerda
```

### Subconsultas

```sql
-- Alunos com idade acima da média
SELECT nome, idade
FROM alunos
WHERE idade > (SELECT AVG(idade) FROM alunos);

-- Alunos que estão matriculados em algum curso
SELECT nome FROM alunos
WHERE id IN (SELECT aluno_id FROM matriculas);
```

### Alias (Apelidos)

```sql
SELECT
    a.nome AS aluno,
    c.nome AS curso
FROM matriculas m
INNER JOIN alunos a ON m.aluno_id = a.id
INNER JOIN cursos c ON m.curso_id = c.id
WHERE c.carga_horaria > 40;
```

## Dicas Importantes

1. **Sempre use WHERE no UPDATE e DELETE** — Sem WHERE, afeta TODOS os registros.
2. **Use nomes descritivos** — `data_nascimento` em vez de `dn`.
3. **Sempre defina PRIMARY KEY** — Cada tabela precisa de um identificador único.
4. **Normalize seus dados** — Evite repetição de informação entre tabelas.
5. **Teste SELECT antes de DELETE** — Rode um SELECT com o mesmo WHERE para ver o que será afetado.
6. **Use transações** — Para operações críticas, use `BEGIN`, `COMMIT` e `ROLLBACK`.

## Exercícios

### Exercício 1 — Criar e Popular
**Nível:** Fácil
**Enunciado:** Crie uma tabela `produtos` com id, nome, preco e categoria. Insira 8 produtos.
**Dica:** Use `AUTO_INCREMENT` no id e `DECIMAL(10,2)` no preço.

### Exercício 2 — Consultas Básicas
**Nível:** Fácil
**Enunciado:** Na tabela de produtos: selecione todos, filtre por categoria, ordene por preço (maior para menor), e busque produtos com preço entre 10 e 50.
**Dica:** Use WHERE, ORDER BY e BETWEEN.

### Exercício 3 — Atualizar e Excluir
**Nível:** Fácil
**Enunciado:** Atualize o preço de um produto específico. Depois, exclua todos os produtos de uma categoria específica.
**Dica:** Sempre teste com SELECT antes de UPDATE/DELETE.

### Exercício 4 — Funções de Agregação
**Nível:** Médio
**Enunciado:** Calcule: total de produtos, preço médio, produto mais caro, produto mais barato, e quantidade de produtos por categoria.
**Dica:** Use COUNT, AVG, MAX, MIN e GROUP BY.

### Exercício 5 — Duas Tabelas Relacionadas
**Nível:** Médio
**Enunciado:** Crie as tabelas `clientes` e `pedidos` (com `cliente_id` como FK). Insira dados e faça um JOIN para listar os pedidos com o nome do cliente.
**Dica:** Use INNER JOIN e FOREIGN KEY.

### Exercício 6 — LEFT JOIN
**Nível:** Médio
**Enunciado:** Usando as tabelas do exercício anterior, liste TODOS os clientes, mostrando seus pedidos. Clientes sem pedidos devem aparecer com valores NULL.
**Dica:** Use LEFT JOIN de clientes para pedidos.

### Exercício 7 — Sistema Escolar
**Nível:** Médio
**Enunciado:** Crie as tabelas: `professores`, `disciplinas` (com `professor_id`) e `notas` (com `aluno_id` e `disciplina_id`). Insira dados e consulte a média de cada aluno.
**Dica:** Use GROUP BY aluno_id com AVG() e JOINs.

### Exercício 8 — Subconsultas
**Nível:** Desafio
**Enunciado:** Liste os produtos com preço acima da média. Liste os clientes que fizeram mais de 2 pedidos.
**Dica:** Use subconsultas no WHERE e HAVING com GROUP BY.

### Exercício 9 — Relatório Completo
**Nível:** Desafio
**Enunciado:** Crie um relatório que mostre: nome do aluno, disciplina, nota, média da disciplina e se o aluno ficou acima ou abaixo da média. Tudo em uma única query.
**Dica:** Use JOINs, subconsultas e CASE WHEN para o indicador.

### Exercício 10 — E-commerce Completo
**Nível:** Desafio
**Enunciado:** Modele e crie as tabelas de um mini e-commerce: clientes, produtos, pedidos, itens_pedido. Crie queries para: total de vendas por mês, produtos mais vendidos e clientes que mais compraram.
**Dica:** Use DATE_FORMAT para agrupar por mês e SUM com GROUP BY.

## Recursos Adicionais

- [SQLBolt](https://sqlbolt.com/) — Tutorial interativo de SQL
- [W3Schools SQL](https://www.w3schools.com/sql/) — Referência com exemplos
- [DB Fiddle](https://www.db-fiddle.com/) — Teste SQL online sem instalar nada
