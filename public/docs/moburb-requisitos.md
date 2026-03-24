# MobUrb — Requisitos

> Plataforma de dados para Mobilidade Urbana

## Engenharia de Requisitos

Disciplina da Engenharia de Software composta por um conjunto de atividades com as seguintes etapas:

- **Levantamento de requisitos:** Obter todas as informações possíveis e necessárias para as etapas seguintes. Começa com o briefing.
- **Análise ou refinamento:** Discussão, negociação, ajustes e definição dos requisitos.
- **Documentação:** Escrever os requisitos aplicando metodologia apropriada.
- **Validação:** Apresentar ao cliente visando identificar lacunas ou aprovação.
- **Gestão:** Controlar as mudanças que inevitavelmente surgirão durante o desenvolvimento do projeto.

Os requisitos se dividem em:

- **Requisitos Funcionais (RF):** Descrevem o que o sistema deve fazer.
- **Requisitos Não Funcionais (RNF):** Definem a qualidade do sistema.

---

## 1. Escopo e Objetivos

O sistema MobUrb visa automatizar a cobrança de tarifas, reduzir o fluxo de dinheiro em espécie dentro dos veículos e gerar dados precisos sobre a demanda de passageiros para o planejamento urbano.

---

## 2. Requisitos Funcionais (RF)

Os requisitos descrevem o que o sistema deve fazer.

### RF-01 — Cadastro de Passageiros

O sistema deve permitir o cadastro completo de passageiros, contendo no mínimo:

- Nome completo
- CPF (com validação de formato e unicidade)
- Data de nascimento
- Foto do usuário
- Categoria do passageiro (Comum, Estudante, Idoso, PCD, Outros)
- Status do cadastro (Ativo, Suspenso, Bloqueado)

**Regras associadas:**

- Passageiros das categorias Estudante, Idoso e PCD devem ter documentação comprobatória vinculada.
- Alterações cadastrais devem ser versionadas (histórico).

### RF-02 — Emissão e Gerenciamento de Cartões

O sistema deve permitir:

- Vincular um cartão NFC/RFID a um passageiro.
- Reemitir cartões em caso de perda ou dano.
- Bloquear cartões por roubo, perda ou fraude.
- Desvincular cartões antigos automaticamente ao emitir um novo.

**Regras associadas:**

- Um CPF pode ter apenas um cartão ativo por vez.
- Cartões bloqueados não podem ser validados nos ônibus.

### RF-03 — Gestão de Créditos

O sistema deve permitir:

- Consulta de saldo em tempo real (online) e localmente (offline).
- Histórico completo de recargas e débitos.
- Estorno de créditos em casos autorizados.

### RF-04 — Recarga de Créditos

> *Atividade: a definir com o cliente.*

### RF-05 — Validação de Acesso no Ônibus

O sistema embarcado deve:

- Ler o cartão NFC/RFID.
- Validar:
  - Autenticidade do cartão
  - Status (ativo/bloqueado)
  - Saldo disponível
- Debitar o valor da tarifa correspondente.
- Liberar a catraca automaticamente.

**Regras associadas:**

- O processo completo deve ocorrer em até 3 segundos.
- Caso não haja saldo, o acesso deve ser negado com feedback visual/sonoro.

### RF-06 — Gestão de Tarifas

O sistema deve permitir o cadastro de múltiplos tipos de tarifa:

- Tarifa padrão
- Meia-tarifa
- Gratuidade
- Integração temporal

Configuração por:

- Categoria do usuário
- Linha
- Horário
- Região

### RF-07 — Integração entre Linhas

> *Atividade: a definir com o cliente.*

### RF-08 — Sincronização de Dados

> *Atividade: a definir com o cliente.*

### RF-09 — Monitoramento Operacional

O sistema deve permitir:

- Acompanhamento em tempo real dos validadores ativos/inativos.
- Detecção de falhas de hardware ou software.
- Registro de eventos (reinicializações, falhas de leitura, tentativas de fraude).

### RF-10 — Relatórios e Business Analytics

> *Atividade: a definir com o cliente.*

### RF-11 — Administração e Perfis de Acesso

> *Atividade: a definir com o cliente.*

### RF-12 — Auditoria e Rastreamento

O sistema deve:

- Registrar logs de todas as operações críticas.
- Permitir rastreamento de transações por cartão, ônibus, linha e horário.
- Detectar padrões suspeitos (ex: uso excessivo em curto intervalo).

---

## 3. Requisitos Não Funcionais (RNF)

Os requisitos que definem a qualidade do sistema:

- **RNF-01: Disponibilidade:** O validador deve funcionar offline (caso o ônibus perca o sinal de internet), validando o saldo gravado no chip do cartão.
- **RNF-02: Segurança:** Criptografia de ponta a ponta para evitar clonagem de cartões.
- **RNF-03: Performance:** O tempo de resposta da catraca não deve exceder 3 segundos.
- **RNF-04: Robustez:** O hardware embarcado deve resistir a vibrações, calor e poeira.
- **RNF-05: Escalabilidade:** Suportar crescimento de usuários, linhas e veículos sem degradação perceptível.
- **RNF-06: Conformidade Legal:** Adequação à LGPD (dados pessoais e biométricos).
- **RNF-07: Manutenibilidade:** Código modular e documentado.
- **RNF-08: Observabilidade:** Logs, métricas e alertas centralizados.
