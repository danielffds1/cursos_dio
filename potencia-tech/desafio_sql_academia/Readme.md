# Desafio de criação de sistema começando do zero

Este repositório contém a definição do esquema de banco de dados para um sistema de atividades de rotina da academia. Ele possui as principais entidades de Aluno, Pagamento, Funcionário, Frequência e Equipamentos.

O objetivo deste desafio foi modelar um banco de dados do zero. Sendo assim, foi criado o modelo relacional das tabelas, criado o dataset, tabelas, populando o banco com dados e praticando várias queries interessantes aprendidas durante todo o curso.

## Relatando um overview do banco

### Tabelas

- **Aluno**: Armazena informações sobre os alunos da academia, incluindo detalhes pessoais, data de início, data de nascimento, telefone e plano de pagamento.

- **Pagamento Aluno**: Registra os pagamentos feitos pelos alunos, incluindo a data, valor, método de pagamento e status do pagamento.

- **Funcionário**: Contém informações sobre os funcionários da academia, incluindo nome, sobrenome, status de ativo/desativo, endereço, data de início, data de nascimento, telefone e cargo.

- **Frequência**: Registra a frequência dos alunos, indicando se estiveram presentes ou ausentes em datas específicas.

- **Equipamento**: Armazena informações sobre os equipamentos da academia, incluindo nome, número de série, data de aquisição, condição e valor.

### Criação de queries

1. **Listando todos os funcionários da academia**: Esta consulta simplesmente lista todos os funcionários da academia, incluindo seus nomes completos, endereços e cargos.

2. **Contagem de funcionários por cargo**: Essa consulta agrupa os funcionários por cargo e conta quantos funcionários existem em cada cargo.

3. **Listando todos os alunos da academia**: Esta consulta lista todos os alunos da academia, incluindo seus nomes completos, data de início, telefone e plano de pagamento.

4. **Contagem de alunos por modalidade de pagamento**: Essa consulta agrupa os alunos por modalidade de pagamento e conta quantos alunos estão em cada modalidade.

5. **Total de pagamento por aluno**: Esta consulta calcula o total de pagamentos feitos por cada aluno, somando os valores dos pagamentos.

6. **Alunos com pagamentos acima de 500**: Esta consulta filtra os alunos que fizeram pagamentos acima de 500 e mostra o total de pagamento para cada um deles.

7. **Frequência dos alunos**: Essa consulta calcula o total de presenças de cada aluno com base na tabela de frequência. Ela mostra o nome completo do aluno, a data de início e o total de presenças.

8. **Treinadores responsáveis pelos alunos**: Esta consulta lista os funcionários que são treinadores e estão responsáveis pelos alunos.

9. **Contagem de alunos por treinador**: Essa consulta agrupa os alunos por treinador e conta quantos alunos cada treinador está supervisionando.

No geral, essas consultas fornecem uma visão abrangente das informações armazenadas nas tabelas do banco de dados da academia e podem ser úteis para acompanhar o desempenho dos alunos, dos funcionários e muito mais.