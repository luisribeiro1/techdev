# MobUrb — Briefing

> Plataforma de dados para Mobilidade Urbana

## 1. Visão Geral

O projeto MobUrb nasce da necessidade de modernizar a mobilidade urbana, substituindo o pagamento em espécie pela bilhetagem eletrônica. O objetivo é criar um ecossistema digital onde o passageiro gerencia seus créditos e o transporte público opera com maior fluidez, segurança e precisão de dados.

## 2. O Problema

Atualmente, o uso de dinheiro físico nos ônibus gera diversos gargalos:

- **Lentidão no embarque:** O tempo gasto com troco atrasa as viagens.
- **Insegurança:** Grandes quantias de dinheiro nos veículos atraem assaltos.
- **Falta de Dados:** A gestão municipal tem dificuldade em rastrear o fluxo real de passageiros por horário e linha.

## 3. A Solução Proposta

Implementar um sistema de cartões inteligentes (NFC/RFID) e validadores embarcados. O passageiro deixa de ser apenas um "pagante" e passa a ter uma identidade no sistema, permitindo tarifas diferenciadas (estudantes, idosos) e integração entre linhas.

## 4. Pilares do Sistema

- **Conveniência:** Recarga fácil via canais digitais e físicos.
- **Agilidade:** Validação de passagem em milissegundos.
- **Transparência:** Relatórios precisos para a empresa operadora e para a prefeitura.

## 5. Público-Alvo

- **Passageiros:** Buscam rapidez e facilidade no pagamento.
- **Operadores (Motoristas/Cobradores):** Foco na condução e segurança, com menor carga burocrática.
- **Gestores Públicos:** Necessitam de métricas para otimizar as frotas.

## 6. Principais Entregáveis

- Sistema de cadastro e emissão de cartões.
- Plataforma de gestão de créditos e vendas.
- Software embarcado para os validadores das catracas.
- Painel administrativo (Dashboard) para monitoramento em tempo real.

> **Nota de Implementação:** O sistema deve ser desenhado para operar em regime híbrido. Ou seja, a validação do cartão deve ocorrer de forma offline (direto no hardware da catraca) para garantir o embarque mesmo em zonas de sombra de sinal de internet, sincronizando os dados assim que a conexão for restabelecida.
