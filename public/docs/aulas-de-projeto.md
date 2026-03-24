# Temas de aulas de projeto

> Aspectos gerais sobre desenvolvimento de sistemas

## 1 - Evolução da interação Homem-Computador e da autonomia dos sistemas

### 1ª Era: O Computador como "Fortaleza" (Operadores Especializados)

Nesta fase, o computador era uma máquina "quase sagrada" e distante.

**A dinâmica:** O usuário comum não tocava na máquina. Ele escrevia o que precisava em formulários de papel e entregava ao Digitador ou Operador de Mainframe.

**O foco:** Processamento em lote (Batch). Você entregava os dados hoje para receber o relatório à tarde ou amanhã.

**Linguagens:**

- COBOL: A rainha dos dados empresariais e bancos.
- FORTRAN: Focada em cálculos científicos e engenharia.
- Assembly: Para falar diretamente com o hardware da máquina.

### 2ª Era: O Computador como Ferramenta (Funcionários Operadores)

Com o surgimento dos PCs e terminais, a tecnologia foi para a mesa de quem trabalhava.

**A dinâmica:** O administrativo, o contador e o vendedor passaram a "alimentar" o sistema enquanto trabalhavam.

**O foco:** Eficiência interna. O software passou a ser o meio de trabalho, não apenas um repositório de dados.

**Linguagens:**

- C / C++: Para criar sistemas operacionais e softwares rápidos.
- Pascal / Delphi: Muito usados para criar programas de gestão com janelas.
- Visual Basic: Tornou a criação de formulários para empresas algo muito simples.

### 3ª Era: O Computador como Serviço (Autoatendimento)

A tecnologia saltou o muro da empresa e chegou ao cliente final.

**A dinâmica:** O banco treinou o cliente para usar o Caixa Eletrônico; a loja treinou o cliente para usar o E-commerce.

**O foco:** Conveniência e redução de custos operacionais (o cliente trabalha para a empresa).

**Linguagens:**

- Java: Prometeu o "escreva uma vez, rode em qualquer lugar" (ideal para bancos).
- PHP / ASP: As linguagens que criaram os primeiros sites dinâmicos e e-commerces.
- JavaScript: A linguagem que deu vida e interatividade às páginas web.

### 4ª Era: O Computador como Ecossistema (Sistemas que falam com Sistemas)

É a era da integração total (B2B), onde os humanos muitas vezes nem percebem a troca de dados.

**A dinâmica:** APIs conectam tudo. Seu app de entrega conversa com o sistema do restaurante, que conversa com a operadora de cartão.

**O foco:** Interoperabilidade e automação invisível.

**Tecnologias:** APIs REST, JSON, Docker, Cloud (AWS, Azure, Google Cloud).

**Linguagens:**

- Python: Pela sua simplicidade em lidar com dados e integrações.
- Node.js: JavaScript rodando no servidor para aguentar milhares de conexões simultâneas.
- Java, C#, Go, entre outras.

### 5ª Era: O Computador como Agente (A Era da IA)

Agora, o sistema não apenas recebe ordens, ele toma decisões e gera conteúdo.

**A dinâmica:** A IA opera o sistema por nós. Ela não apenas guarda o dado, ela o interpreta, redige o e-mail, analisa o gráfico e sugere a estratégia.

**O foco:** Autonomia e cognição artificial.

**Tecnologias:** Redes Neurais, LLMs (GPT, Gemini), GPUs (chips da NVIDIA), Vetorização de Dados.

**Linguagens:**

- Python: É a linguagem absoluta aqui (bibliotecas como PyTorch e TensorFlow).
- R: Muito usada para a parte estatística pesada.
- C++ / Rust: Usadas "nos bastidores" para garantir que a IA processe trilhões de dados com velocidade máxima.

> **Observação:** As eras 3 e 4 ocorrem simultaneamente.

**Dois aspectos importantes:**

- **A Mobilidade (O fator "Sempre Comigo"):** Antes, o usuário ia até o sistema (caixa eletrônico ou PC). Com o smartphone, o sistema passou a perseguir o usuário 24h por dia.
- **O Cloud Computing (A Nuvem):** Os sistemas deixaram de estar "dentro" das máquinas físicas das empresas e passaram a ser serviços globais/remotos.

---

## 2 - Informática, Computação ou TI?

**Computação: A Ciência (O "Porquê")**

A Ciência da Computação é o campo mais amplo e teórico. Ela foca no estudo dos algoritmos, da lógica, da matemática e de como processar dados de forma eficiente.

**O foco:** Criar novas tecnologias, entender como o software funciona "por baixo dos panos" e resolver problemas complexos.

**Informática: A Informação Automática (O "Como")**

O termo é mais antigo e vem da junção de Informação + Automática. A informática foca no uso de ferramentas (hardware e software) para organizar e processar informações.

**O foco:** O tratamento da informação. É a aplicação prática da computação no nosso cotidiano.

**TI (Tecnologia da Informação): A Gestão (O "Para quê")**

A TI é um termo mais voltado para o mundo corporativo. Refere-se a todo o ecossistema tecnológico que uma empresa usa para funcionar, desde a infraestrutura de redes até o suporte ao usuário.

**O foco:** Gestão, segurança, redes e infraestrutura. É garantir que a tecnologia sirva aos objetivos de um negócio.

---

## 3 - Software, Sistema, Programa, Aplicação, App, Algoritmo, Script, Firmware

**Software: O Conceito Geral**

O software é a categoria mestre. É tudo o que não é físico (o que você não "chuta", apenas "xinga"). Ele engloba desde o sistema operacional que faz o computador ligar até o joguinho no seu celular.

**Programa: A Instrução Isolada**

Um programa é um conjunto de instruções escritas para executar uma tarefa específica. Antigamente, usávamos mais esse termo para softwares que instalávamos no PC via CD-ROM ou disquete.

**Diferença:** Um software pode ser composto por vários programas trabalhando juntos.

**Aplicação (ou Aplicativo): O Foco no Usuário**

Uma aplicação (ou Application) é um tipo de software feito especificamente para o usuário final realizar uma atividade.

**App: A Versão "Moderna" e Móvel**

O termo App é apenas uma abreviação de "Application", mas que se popularizou com a chegada dos smartphones. Hoje, quando dizemos "app", geralmente nos referimos a algo mais leve, focado e que roda em dispositivos móveis ou na web (webapp).

**Sistema: O Ecossistema Completo**

Um sistema é algo muito maior. Ele não é apenas um código, mas a união de softwares, bancos de dados, redes e, às vezes, até pessoas.

**Exemplo:** O "Sistema Bancário" não é um app só; é um conjunto imenso de programas, servidores e regras que fazem o dinheiro se mover.

**Algoritmo: É a "receita de bolo"**

É a aplicação da lógica que vem antes de virar código. Lógica é o pensamento, a ideia; já algoritmo é quando você pega o raciocínio lógico e o transforma em um passo a passo para resolver o problema.

**Script: Um programa pequeno e simples**

Geralmente usado para automatizar tarefas repetitivas ou instruções específicas (SQL, por exemplo).

**Firmware: É o software que vem "embutido" no hardware**

Exemplos: o software da sua Smart TV, BIOS do computador, impressora, entre outros.

---

## 4 - Júnior, Pleno e Sênior

| Nível | Perfil |
|---|---|
| **Júnior** | Precisa de suporte |
| **Pleno** | Faz as tarefas com autonomia |
| **Sênior** | Faz, ensina e gerencia |

---

## 5 - Ciclo de Vida da Informação

```
Entrada → Processamento → Saída
```

### Entrada

É a fase de coleta ou captura de dados brutos. Os dados podem vir de dentro da organização (como o cartão de ponto de um funcionário) ou de fora (como a cotação do dólar).

**Exemplos:**

- Um operador de caixa escaneando o código de barras de um produto.
- Um cliente preenchendo um formulário de cadastro num site.
- Sensores IoT em uma fábrica medindo a temperatura de uma máquina.

### Processamento

É a conversão dos dados brutos em uma forma mais significativa. Aqui os dados são trabalhados para gerar informação.

**O que acontece:** Cálculos, comparações, classificações, resumos e análises.

**Exemplos:**

- O sistema do supermercado multiplicando o preço unitário pela quantidade e somando o imposto.
- O software de RH calculando o salário líquido após descontar INSS e Imposto de Renda.
- Um algoritmo analisando o histórico de compras para recomendar novos produtos.

### Saída

É a transferência da informação processada para as pessoas ou atividades que a utilizarão. A saída deve ser clara e útil para a tomada de decisão.

**O que acontece:** Geração de relatórios, emissão de documentos, gráficos, alertas visuais ou sonoros.

**Exemplos:**

- O cupom fiscal impresso (ou enviado por e-mail) para o cliente.
- Um relatório de vendas mensal entregue ao gerente.
- Um alerta vermelho na tela do supervisor de produção indicando falha na máquina.

### Atividade

Pense em um processo do dia a dia e identifique exemplos de entrada, processamento e saída.

---

## 6 - Briefing

O briefing é o primeiro passo de qualquer projeto. É a coleta inicial de informações onde o cliente expõe suas dores, necessidades e expectativas.

Trata-se de um conjunto de dados e instruções fornecidos pelo cliente que servem de base para o desenvolvimento do projeto.

Idealmente ele deverá informar o problema a ser resolvido, o público-alvo, o orçamento estimado e os prazos desejados.

---

## 7 - Linguagens e Tecnologias

Mapa mental com as principais linguagens e tecnologias do mercado: [Linguagens e Tecnologias — MindMeister](https://www.mindmeister.com/app/map/3168927884)
