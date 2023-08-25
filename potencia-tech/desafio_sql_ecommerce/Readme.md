# Desafio Sistema de E-commerce

Este repositório contém a definição do esquema de banco de dados para um sistema de e-commerce. O esquema original foi desenvolvido com base nas aulas de banco de dados do Bootcamp_Dio_Ifood, mas passou por refinamentos para melhor atender às necessidades do projeto. Além disso, foram criadas várias inserções de dados para ilustrar as modificações feitas nas entidades.

## Principais Diferenças entre o Esquema Original e o Refinado

### Adição de Tipo de Cliente
- Foi introduzido o campo `typeClient` para distinguir entre clientes que são Pessoas Físicas e Pessoas Jurídicas. Na aplicação, um campo de escolha deve ser fornecido para que o usuário selecione o tipo de cliente, sendo CPF ou CNPJ.

### Inclusão de Informações de Pagamento e Entrega
- Foi incluída no esquema a tabela de entrega, que está relacionada com a tabela de pedidos em um relacionamento de um para muitos.
- Também foi adicionada a entidade de pagamentos ao esquema e os scripts foram alterados para atender às demandas do desafio.

## Consultas Adicionais do Desafio

1. **Contagem de Usuários com CPF**: Uma consulta que conta quantos usuários possuem CPF na base de dados.
2. **Clientes com Pedidos Confirmados para Entrega**: Visualização dos clientes que têm pedidos confirmados para entrega. Foram utilizados CASE e condicionais para filtrar as consultas.
3. **Contagem de Produtos Disponíveis em Estoque Agrupados por Categoria**: Esta consulta agrupa produtos disponíveis em estoque por categoria e conta quantos há em cada categoria.
4. **Clientes com Pedidos Acima de R$50 e Data de Entrega Próxima**: Filtra os clientes cujos pedidos têm um valor superior a R$50 e cuja data de entrega está próxima.
5. **Escolha de Pagamento de Clientes com Pedidos Acima de R$5000**: Identifica a escolha de pagamento dos clientes cujos pedidos têm um valor acima de R$5000.

Este repositório oferece uma visão geral do esquema de banco de dados refinado e das consultas adicionais que podem ser executadas para obter informações relevantes sobre o sistema de e-commerce.