-- Criando as Querys solicitadas

-- Recuperação simples com Select
show tables;
desc clients;

select * from clients;

-- Contagem de clientes
select count(*) as quantidade_clientes from clients;

-- Diferenciando clientes de empresas
select concat(Fname, ' ', Lname) as Nome_Completo, Address, typeClient from clients
where cpf IS NOT NULL;

select count(*) as clientes_fisicos from clients
where cpf IS NOT NULL
group by typeClient;

-- Filtros com Where
-- Quero saber quais clientes estão com os pedidos confirmados
SELECT
    CASE
        WHEN c.Lname IS NOT NULL THEN CONCAT(c.Fname, ' ', c.Lname)
        ELSE Fname
    END AS Nome, Address, orderDescription as produtos from clients as c, orders as p
where c.idClient = p.idOrderClient and orderStatus = 'Confirmado';


-- Crie expressões para gerar atributos derivados
-- Contagem de produtos disponíveis em estoque agrupados por categoria
select c.category, sum(s.quantity)  from product as c 
	inner join storageLocation as sl on c.idProduct = sl.idLProduct
    inner join productStorage as s on sl.idLstorage = s.idProdStorage
    group by c.category;

-- Defina ordenações dos dados com orderby
select c.Fname, c.Address, o.orderStatus, d.dateDeliveryOrder, o.sendValue  from clients as c
inner join orders as o on c.idClient = o.idOrderClient
inner join deliveryOrder as d on o.idOrder = d.idOrder
where o.sendValue > 50
order by c.Fname;

-- Condiçõe sde filtros aos grupos - Having Statement

-- Verificando qual as escolhas de pagamento acima de 5000
select p.typePayment, sum(p.limitAvailable)  from clients as c
inner join payments as p on c.idClient = p.idClient
group by typePayment
having sum(p.limitAvailable) > 5000;

