# DevOps

> DevOps não é uma ferramenta nem um cargo: é uma **forma de trabalhar** que aproxima quem desenvolve software de quem o coloca em produção — para que o software chegue ao usuário mais rápido, com mais qualidade e menos estresse.

## O que é DevOps?

Imagine dois times em uma empresa de software:

- O time de **Desenvolvimento** quer lançar novas funcionalidades o mais rápido possível
- O time de **Operações** quer que o sistema seja estável e não quebre

Historicamente, esses times viviam em conflito. Desenvolvedores entregavam código e "jogavam por cima do muro" para as Operações publicarem. Quando algo dava errado, a culpa era um jogo de ping-pong entre os times.

**DevOps** surgiu para derrubar esse muro.

O nome vem de **Dev**elopment + **Op**eration**s**. A ideia central é que essas duas responsabilidades devem trabalhar juntas, com processos automatizados que tornam o ciclo de vida do software mais ágil e confiável.

---

## Por que DevOps importa?

**Antes do DevOps (cenário tradicional):**
```
Desenvolvedores trabalham por meses
       ↓
Entregam tudo de uma vez para Operações
       ↓
Operações tentam publicar (caos!)
       ↓
Algo quebra em produção
       ↓
Ninguém sabe exatamente o que causou o problema
       ↓
Clientes ficam sem o sistema por horas (ou dias)
```

**Com DevOps:**
```
Desenvolvedores fazem mudanças pequenas e frequentes
       ↓
Testes automáticos verificam que nada quebrou
       ↓
Deploy automático vai para produção
       ↓
Monitoramento detecta qualquer anomalia imediatamente
       ↓
Se algo der errado, o rollback é rápido e controlado
```

---

## Os Pilares do DevOps

### 1. Cultura de Colaboração

O primeiro passo é **cultural**: times de dev e ops compartilham responsabilidades, objetivos e ferramentas. O sucesso é de todos, e os problemas também.

### 2. Automação

Tudo que pode ser automatizado, deve ser. Testes, builds, deploys, monitoramento. Humanos cometem erros quando fazem tarefas repetitivas; máquinas não.

### 3. Medição

Você não pode melhorar o que não mede. DevOps usa métricas para entender o que está funcionando:
- Quanto tempo leva do commit ao deploy?
- Quantas vezes deployamos por semana?
- Quanto tempo fica fora do ar quando algo quebra?

### 4. Compartilhamento de conhecimento

Documentação, runbooks (guias de como resolver problemas), postmortems (análises de incidentes sem apontar culpados). O conhecimento não fica preso na cabeça de uma pessoa.

---

## O Ciclo DevOps

O DevOps é frequentemente representado como um loop infinito (o símbolo ∞):

```
  PLANEJAR → CODIFICAR → CONSTRUIR → TESTAR
      ↑                                  ↓
  MONITORAR                           PUBLICAR
      ↑                                  ↓
  OPERAR ←── CONFIGURAR ←── INTEGRAR ←──┘
```

Cada volta do loop é uma entrega de valor ao usuário.

---

## Conceito-chave: CI/CD

CI/CD é a espinha dorsal técnica do DevOps. São dois conceitos relacionados:

### CI — Integração Contínua (Continuous Integration)

Integração Contínua significa que **todos os desenvolvedores integram seu código com frequência** (várias vezes por dia), e a cada integração um conjunto de testes automáticos é executado.

```
Desenvolvedor A escreve código
       ↓
Faz push para o repositório
       ↓
Pipeline CI é acionado automaticamente:
  ✅ Compila o código
  ✅ Executa testes unitários
  ✅ Executa testes de integração
  ✅ Verifica qualidade do código (linting)
       ↓
Resultado: ✅ PASSOU ou ❌ FALHOU (com detalhes do problema)
```

O objetivo é detectar problemas **cedo**, quando ainda são baratos de corrigir.

### CD — Entrega/Deploy Contínuo (Continuous Delivery / Deployment)

Existem duas variações:

**Continuous Delivery (Entrega Contínua):**
O código está sempre em um estado que pode ser publicado, mas o deploy em produção é feito manualmente (um clique de botão).

**Continuous Deployment (Deploy Contínuo):**
Todo commit que passa nos testes vai **automaticamente** para produção, sem intervenção humana.

```
CI passou?
    ↓ SIM
Deploy em Homologação (ambiente de testes)
    ↓
Testes de aceitação automáticos
    ↓
Deploy em Produção (automático ou com aprovação)
    ↓
Monitoramento em tempo real
```

---

## Controle de Versão com Git

Tudo começa com Git. Sem controle de versão, DevOps não existe.

### Conceitos básicos

```bash
# Inicializar repositório
git init

# Ver status dos arquivos
git status

# Adicionar arquivos ao stage
git add arquivo.js
git add .          # adiciona todos os arquivos

# Fazer commit
git commit -m "feat: adiciona tela de login"

# Enviar para o repositório remoto
git push origin main

# Baixar mudanças do remoto
git pull origin main
```

### Git Flow — estratégia de branches

Uma estratégia comum para times que usam DevOps:

```
main (produção)
  └── develop (desenvolvimento)
        ├── feature/login        ← nova funcionalidade
        ├── feature/carrinho     ← outra funcionalidade
        └── hotfix/corrige-bug   ← correção urgente em produção
```

- **main:** código que está em produção. Nunca comita direto aqui.
- **develop:** integração das novas funcionalidades.
- **feature/xxx:** cada nova funcionalidade em sua própria branch.
- **hotfix/xxx:** correções urgentes que não podem esperar o ciclo normal.

---

## Ambientes

Em DevOps é comum ter múltiplos ambientes, cada um com um propósito:

| Ambiente | Propósito | Quem usa |
|---|---|---|
| **Local** | Desenvolvimento | Desenvolvedor em sua máquina |
| **Development** | Integração contínua | Sistema de CI |
| **Staging / Homologação** | Validação antes do lançamento | QA, Product Owner, Cliente |
| **Production** | Produto final | Usuários reais |

A ideia é que o código percorra todos esses ambientes antes de chegar ao usuário.

---

## Infraestrutura como Código (IaC)

Infraestrutura como Código significa **descrever seus servidores, redes e configurações em arquivos de código**, em vez de configurar tudo manualmente pelo painel de controle.

**Por que isso importa?**
- Qualquer pessoa consegue recriar o ambiente lendo o código
- Mudanças ficam registradas no histórico do Git
- Reduz o problema de "funciona na minha máquina"

### Exemplo com Docker

Docker é a ferramenta mais popular para isso. Você descreve o ambiente da sua aplicação em um `Dockerfile`:

```dockerfile
# Dockerfile — define o ambiente da aplicação
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

E com um único comando, qualquer pessoa pode rodar a aplicação em qualquer máquina:

```bash
docker build -t minha-app .
docker run -p 3000:3000 minha-app
```

### Docker Compose — múltiplos serviços

Aplicações reais têm vários serviços (API, banco de dados, cache...). O `docker-compose.yml` orquestra todos juntos:

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
# Sobe todos os serviços de uma vez
docker-compose up -d
```

---

## Pipelines de CI/CD na prática

### GitHub Actions

GitHub Actions é uma plataforma de CI/CD integrada ao GitHub. Você cria arquivos YAML dentro da pasta `.github/workflows/`:

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Instalar dependências
        run: npm ci

      - name: Executar testes
        run: npm test

      - name: Verificar build
        run: npm run build
```

Toda vez que alguém faz um push ou abre um Pull Request, esse pipeline roda automaticamente.

### Adicionando deploy automático

```yaml
# Após os testes passarem, faz deploy para staging
  deploy-staging:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'

    steps:
      - uses: actions/checkout@v4

      - name: Deploy para Staging
        run: |
          echo "Fazendo deploy para staging..."
          # aqui entram os comandos reais de deploy
```

---

## Monitoramento e Observabilidade

Publicar o código é só metade do trabalho. Depois do deploy, precisamos saber se tudo está funcionando corretamente.

### Os três pilares da observabilidade

**1. Logs**
Registros do que aconteceu, em ordem cronológica:

```
2024-01-15 10:32:45 INFO  Usuário 1234 fez login
2024-01-15 10:32:46 INFO  Buscando pedidos do usuário 1234
2024-01-15 10:32:47 ERROR Timeout ao conectar no banco de dados
2024-01-15 10:32:47 ERROR Falha ao buscar pedidos: connection timeout
```

**2. Métricas**
Números que descrevem o estado do sistema ao longo do tempo:

```
CPU: 45%
Memória: 2.1 GB / 4 GB
Requisições por segundo: 342
Tempo médio de resposta: 120ms
Taxa de erros: 0.2%
```

**3. Traces (Rastreamento)**
Rastreia o caminho de uma requisição por todos os serviços:

```
Requisição do usuário → API Gateway (12ms)
                          → Serviço de Autenticação (8ms)
                          → Serviço de Pedidos (45ms)
                            → Banco de Dados (40ms)
                          → Resposta ao usuário (Total: 65ms)
```

### Ferramentas comuns de monitoramento

| Ferramenta | Uso |
|---|---|
| **Prometheus** | Coleta de métricas |
| **Grafana** | Dashboards e visualização |
| **Datadog** | Monitoramento completo (pago) |
| **Sentry** | Rastreamento de erros em aplicações |
| **New Relic** | APM (Application Performance Monitoring) |
| **ELK Stack** | Elasticsearch + Logstash + Kibana para logs |

---

## Alertas e Resposta a Incidentes

Um bom sistema de monitoramento avisa **antes que o usuário perceba** que algo está errado.

```yaml
# Exemplo de alerta: dispara se a taxa de erros
# ficar acima de 5% por mais de 5 minutos
alert: AltaTaxaDeErros
  condition: error_rate > 0.05
  duration: 5m
  severity: critical
  notify:
    - slack: #alertas-producao
    - pagerduty: oncall-team
```

**Postmortem (análise pós-incidente):**
Quando algo dá errado em produção, o time documenta o que aconteceu, a causa raiz e as ações para evitar que se repita — **sem apontar culpados**. Isso é parte da cultura DevOps.

---

## Segurança: DevSecOps

DevSecOps integra segurança ao longo de todo o pipeline, em vez de verificar apenas no final.

```
Código → Análise estática (SAST) → Build → Scan de dependências
       → Testes de segurança → Deploy → Monitoramento de ameaças
```

**Práticas básicas:**

```bash
# Verificar vulnerabilidades nas dependências npm
npm audit

# Corrigir vulnerabilidades automáticas
npm audit fix
```

**Nunca no repositório:**
- Senhas e chaves de API
- Tokens de acesso
- Certificados privados

Use variáveis de ambiente:

```bash
# .env (NUNCA commitar esse arquivo)
DATABASE_URL=postgres://user:senha@localhost/db
API_KEY=abc123secreto

# No código:
const db = process.env.DATABASE_URL
const apiKey = process.env.API_KEY
```

---

## Métricas DORA — Como medir maturidade DevOps

As métricas DORA (DevOps Research and Assessment) são as mais usadas para medir a performance de times de engenharia:

| Métrica | O que mede | Elite |
|---|---|---|
| **Deployment Frequency** | Com que frequência o time deploya | Múltiplas vezes ao dia |
| **Lead Time for Changes** | Tempo do commit até produção | Menos de 1 hora |
| **Change Failure Rate** | % de deploys que causam problemas | 0-15% |
| **MTTR** (Mean Time to Restore) | Tempo para recuperar de um incidente | Menos de 1 hora |

---

## Dicas para Iniciantes

1. **Aprenda Git antes de tudo** — é a base de qualquer prática DevOps. Commits claros, branches organizadas, Pull Requests bem descritos.

2. **Comece simples** — um pipeline básico com `npm test && npm run build` já é CI. Não precisa ser complexo no início.

3. **Automatize o que você faz repetidamente** — se você faz algo mais de duas vezes, considere automatizar.

4. **Leia os logs** — quando algo der errado, os logs são sua primeira fonte de informação. Aprenda a interpretar mensagens de erro.

5. **Containers mudam tudo** — mesmo sem usar Kubernetes ou orquestradores complexos, saber usar Docker básico já resolve muitos problemas do "funciona na minha máquina".

6. **Cultura primeiro** — DevOps sem mudança cultural é só automação. O mais importante é a mentalidade de colaboração e melhoria contínua.

---

## Ferramentas do Ecossistema DevOps

### Controle de Versão
- **Git** — padrão da indústria
- **GitHub / GitLab / Bitbucket** — plataformas de hospedagem

### CI/CD
- **GitHub Actions** — integrado ao GitHub, gratuito para projetos públicos
- **GitLab CI** — integrado ao GitLab
- **Jenkins** — open source, muito configurável
- **CircleCI / Travis CI** — serviços em nuvem

### Containers e Orquestração
- **Docker** — criar e rodar containers
- **Docker Compose** — orquestrar múltiplos containers localmente
- **Kubernetes** — orquestração de containers em escala (mais avançado)

### Infraestrutura como Código
- **Terraform** — provisionar infraestrutura em qualquer nuvem
- **Ansible** — configuração de servidores
- **Pulumi** — IaC usando linguagens de programação reais

### Monitoramento
- **Prometheus + Grafana** — stack open source muito popular
- **Datadog** — solução completa paga
- **Sentry** — rastreamento de erros em aplicações

### Nuvem
- **AWS** (Amazon Web Services) — líder de mercado
- **Google Cloud Platform (GCP)**
- **Microsoft Azure**

---

## Exercícios

### Exercício 1 — Entendendo o Fluxo
**Nível:** Fácil

**Enunciado:** Desenhe o fluxo de um código desde que o desenvolvedor escreve uma nova funcionalidade até chegar ao usuário final, listando todas as etapas que você acha que deveriam existir. Considere: como garantir que o código funciona? Como publicar sem derrubar o sistema?

**Dica:** Pense nos problemas que podem ocorrer em cada etapa e como preveni-los.

---

### Exercício 2 — Primeiros Passos com Git
**Nível:** Fácil

**Enunciado:** Crie um repositório local, faça pelo menos 3 commits com mensagens descritivas seguindo a convenção `tipo: descrição` (ex: `feat: adiciona formulário de contato`, `fix: corrige validação de email`, `docs: atualiza README`). Depois, crie uma branch `feature/nova-pagina`, faça um commit nela e tente fazer o merge de volta para a main.

**Dica:** Pesquise sobre "Conventional Commits" para entender a convenção de mensagens.

---

### Exercício 3 — Criando um Dockerfile
**Nível:** Médio

**Enunciado:** Você tem uma aplicação Node.js simples com um `server.js` e um `package.json`. Crie um `Dockerfile` que:
1. Use a imagem base `node:20-alpine`
2. Defina `/app` como diretório de trabalho
3. Copie e instale as dependências
4. Copie o resto do código
5. Exponha a porta 3000
6. Defina o comando de inicialização

Depois, construa a imagem e rode o container.

**Dica:** A ordem dos passos no Dockerfile importa para o cache — instale as dependências antes de copiar o código.

---

### Exercício 4 — Pipeline com GitHub Actions
**Nível:** Médio

**Enunciado:** Crie um repositório no GitHub com uma aplicação Node.js simples (pode ser um "Hello World" com Express e um teste básico com Jest). Configure um workflow do GitHub Actions que:
1. Rode em cada push para a branch `main`
2. Instale as dependências
3. Execute os testes
4. Faça o build da aplicação

**Dica:** Crie o arquivo em `.github/workflows/ci.yml`. A documentação do GitHub Actions tem muitos exemplos prontos.

---

### Exercício 5 — Variáveis de Ambiente
**Nível:** Médio

**Enunciado:** Crie uma aplicação Node.js que usa variáveis de ambiente para configurar:
- A porta do servidor (`PORT`)
- Uma chave de API fictícia (`API_KEY`)
- O modo da aplicação (`NODE_ENV`: development ou production)

Use um arquivo `.env` localmente e adicione `.env` ao `.gitignore`. Documente no README quais variáveis são necessárias e quais são os valores padrão.

**Dica:** Use a biblioteca `dotenv` para carregar o `.env` automaticamente em desenvolvimento.

---

### Exercício 6 — Monitoramento com Logs
**Nível:** Médio

**Enunciado:** Adicione logs estruturados a uma aplicação Express. Os logs devem incluir:
- Timestamp de cada requisição
- Método HTTP e rota acessada
- Tempo de resposta em milissegundos
- Código de status da resposta
- Mensagens de erro com stack trace quando ocorrer uma exceção

**Dica:** Use a biblioteca `morgan` para logs de requisições HTTP ou implemente um middleware personalizado.

---

### Exercício 7 — Ambiente Completo com Docker Compose
**Nível:** Desafio

**Enunciado:** Crie um `docker-compose.yml` para uma aplicação com três serviços:
1. **API** (Node.js/Express) — porta 3000
2. **Banco de Dados** (PostgreSQL) — com volume persistente
3. **Cache** (Redis) — para armazenar sessões

A API deve se conectar tanto ao PostgreSQL quanto ao Redis usando variáveis de ambiente. Todos os serviços devem subir com um único `docker-compose up`.

**Dica:** Use a diretiva `depends_on` para garantir que o banco sobe antes da API. Configure um `healthcheck` para o banco de dados.

---

### Exercício 8 — Pipeline Completo de CI/CD
**Nível:** Desafio

**Enunciado:** Expanda o pipeline do Exercício 4 para incluir:
1. **Job de testes** — roda os testes e gera relatório de cobertura
2. **Job de análise de segurança** — roda `npm audit`
3. **Job de build do Docker** — constrói a imagem Docker
4. **Job de deploy** (simulado) — só roda na branch `main` após todos os outros passarem; pode ser apenas um `echo "Deploy realizado para produção!"`

Os jobs devem rodar em paralelo quando possível e o deploy deve esperar todos os outros terminarem com sucesso.

**Dica:** Use a diretiva `needs` para definir dependências entre jobs. Use `if: github.ref == 'refs/heads/main'` para condicionar o deploy.

---

## Recursos Adicionais

- **Documentação GitHub Actions:** docs.github.com/actions
- **Play with Docker** (ambiente online para praticar Docker): labs.play-with-docker.com
- **Livro:** "The Phoenix Project" — Gene Kim (romance sobre DevOps, leitura obrigatória)
- **Livro:** "Accelerate" — Nicole Forsgren, Jez Humble e Gene Kim (a ciência por trás do DevOps)
- **Roadmap.sh/devops** — trilha de aprendizado visual para DevOps
- **Curso gratuito:** "DevOps Foundations" no LinkedIn Learning
