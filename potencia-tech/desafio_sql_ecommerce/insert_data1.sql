-- inserindo dados de clientes
use ecommerce_estendido;

INSERT INTO clients (Fname, Minit, Lname, CPF, CNPJ, Address, typeClient)
VALUES
('João', 'A.', 'Silva', '12345678901', NULL, 'Rua das Flores, 123', 'Pessoal Física'),
('Maria', 'B.', 'Santos', '98765432109', NULL, 'Avenida Principal, 456', 'Pessoal Física'),
('Empresa ABC', NULL, NULL, NULL, '12345678901234', 'Rua Comercial, 789', 'Pessoa Jurídica'),
('Pedro', 'C.', 'Oliveira', '45678912345', NULL, 'Travessa das Árvores, 56', 'Pessoal Física'),
('Empresa XYZ', NULL, NULL, NULL, '98765432109876', 'Avenida Comercial, 1234', 'Pessoa Jurídica'),
('Ana', 'D.', 'Pereira', '78912345678', NULL, 'Rua dos Apartamentos, 78', 'Pessoal Física'),
('Empresa 123', NULL, NULL, NULL, '54321678901234', 'Avenida das Lojas, 567', 'Pessoa Jurídica'),
('Ricardo', 'E.', 'Ramos', '65432198765', NULL, 'Rua das Esquinas, 90', 'Pessoal Física'),
('Empresa ABCD', NULL, NULL, NULL, '87654321987654', 'Avenida dos Negócios, 4321', 'Pessoa Jurídica'),
('Sofia', 'F.', 'Costa', '34567891234', NULL, 'Rua das Lojas, 12', 'Pessoal Física');

select * from product;

-- inserindo dados em produtos
INSERT INTO product (Pname, classification_kids, category, avaliação, size)
VALUES
('Smartphone XYZ', false, 'Eletrônico', 4.5, '5.5 inches'),
('Camiseta Preta', true, 'Vestimenta', 4.2, 'M'),
('Carrinho de Controle Remoto', true, 'Brinquedos', 3.8, NULL),
('Arroz Integral', false, 'Alimentos', 4.7, '1 kg'),
('Sofá de Couro', false, 'Móveis', 4.0, '3 lugares'),
('Tablet ABC', true, 'Eletrônico', 4.3, '8 inches'),
('Vestido Floral', true, 'Vestimenta', 4.6, 'S'),
('Quebra-Cabeça 1000 Peças', true, 'Brinquedos', 4.1, NULL),
('Feijão Preto', false, 'Alimentos', 4.9, '500 g'),
('Mesa de Jantar', false, 'Móveis', 4.4, '6 lugares');

-- Inserindo tipo de pagamento
INSERT INTO payments (idClient, idPayment, typePayment, limitAvailable)
VALUES
(1, 1, 'Boleto', 1000.00),
(2, 2, 'Cartão', 1500.00),
(3, 3, 'Dois cartões', 2000.00),
(4, 4, 'Boleto', 800.00),
(5, 5, 'Cartão', 1200.00),
(6, 6, 'Dois cartões', 2500.00),
(7, 7, 'Boleto', 600.00),
(8, 8, 'Cartão', 800.00),
(9, 9, 'Dois cartões', 3000.00),
(10, 10, 'Boleto', 750.00);

-- Populando tabela pedidos
INSERT INTO orders (idOrderClient, orderStatus, orderDescription, sendValue, paymentCash)
VALUES
(1, 'Confirmado', 'Pedido de roupas', 50.00, true),
(2, 'Em processamento', 'Pedido de eletrônicos', 120.00, false),
(3, 'Em processamento', 'Pedido de livros', 25.00, true),
(4, 'Cancelado', 'Pedido de alimentos', 45.00, false),
(5, 'Confirmado', 'Pedido de móveis', 300.00, true),
(6, 'Confirmado', 'Pedido de acessórios', 15.00, false),
(7, 'Em processamento', 'Pedido de eletrônicos', 75.00, true),
(8, 'Confirmado', 'Pedido de brinquedos', 40.00, false),
(9, 'Em processamento', 'Pedido de produtos de beleza', 60.00, true),
(10, 'Cancelado', 'Pedido de ferramentas', 90.00, false);

-- Populando tabela de estoque
INSERT INTO productStorage (storageLocation, quantity)
VALUES
('Depósito A', 100),
('Armazém 1', 75),
('Estoque Central', 50),
('Depósito B', 30),
('Prateleira 1', 200),
('Armazém 2', 150),
('Prateleira 2', 80),
('Depósito C', 300),
('Armazém 3', 45),
('Prateleira 3', 60);

-- Populando tabela fornecedor
INSERT INTO supplier (SocialName, CNPJ, contact)
VALUES
('Fornecedor A', '12345678901234', '98765432101'),
('Fornecedor B', '56789012345678', '87654321012'),
('Fornecedor C', '90123456789012', '76543210123'),
('Fornecedor D', '23456789012345', '65432101234'),
('Fornecedor E', '67890123456789', '54321012345'),
('Fornecedor F', '12345678904321', '43210123456'),
('Fornecedor G', '34567890123456', '32101234567'),
('Fornecedor H', '78901234567890', '21012345678'),
('Fornecedor I', '45678901234567', '10987654321'),
('Fornecedor J', '89012345678901', '98765432109');

-- Populando tabela vendedor
INSERT INTO seller (SocialName, AbstName, CNPJ, CPF, location, contact)
VALUES
('Vendedor 1', 'Vend 1', '01234567890123', '098765432', 'Local 1', '98765432101'),
('Vendedor 2', 'Vend 2', '23456789012345', '876543210', 'Local 2', '87654321012'),
('Vendedor 3', 'Vend 3', '34567890123456', '765432109', 'Local 3', '76543210923'),
('Vendedor 4', 'Vend 4', '45678901234567', '654321098', 'Local 4', '65432109834'),
('Vendedor 5', 'Vend 5', '56789012345678', '543210987', 'Local 5', '54321098745'),
('Vendedor 6', 'Vend 6', '67890123456789', '432109876', 'Local 6', '43210987656'),
('Vendedor 7', 'Vend 7', '78901234567890', '321098765', 'Local 7', '32109876567'),
('Vendedor 8', 'Vend 8', '89012345678901', '210987654', 'Local 8', '21098765478'),
('Vendedor 9', 'Vend 9', '90123456789012', '109876543', 'Local 9', '10987654389'),
('Vendedor 10', 'Vend 10', '12345678901234', '987654321', 'Local 10', '98765432109');

select * from seller;

-- Populando tabela produtos vendidos
INSERT INTO productSeller (idPseller, idPproduct, prodQuantity)
VALUES
(1, 1, 5),
(1, 2, 10),
(2, 3, 3),
(2, 4, 8),
(3, 5, 2),
(3, 6, 15),
(4, 7, 7),
(4, 8, 12),
(5, 9, 4),
(5, 10, 9);

-- Populando a tabela de produtos
INSERT INTO productOrder (idPOproduct, idPOorder, poQuantity, poStatus)
VALUES
(1, 1, 5, 'Disponível'),
(2, 2, 10, 'Disponível'),
(3, 3, 3, 'Disponível'),
(4, 4, 8, 'Disponível'),
(5, 5, 2, 'Disponível'),
(6, 6, 15, 'Disponível'),
(7, 7, 7, 'Disponível'),
(8, 8, 12, 'Sem estoque'),
(9, 9, 4, 'Sem estoque'),
(10, 10, 9, 'Disponível');

-- Populando a tabela de estoque
INSERT INTO storageLocation (idLproduct, idLstorage, location)
VALUES
(1, 1, 'Prateleira 1'),
(2, 2, 'Prateleira 2'),
(3, 3, 'Caixa 1'),
(4, 4, 'Caixa 2'),
(5, 5, 'Estoque Central'),
(6, 6, 'Depósito 1'),
(7, 7, 'Depósito 2'),
(8, 8, 'Estoque Principal'),
(9, 9, 'Caixa 3'),
(10, 10, 'Prateleira 3');

INSERT INTO productSupplier (idPsSupplier, idPsProduct, quantity)
VALUES
(1, 1, 100),
(2, 2, 150),
(3, 3, 200),
(4, 4, 75),
(5, 5, 120),
(6, 6, 90),
(7, 7, 80),
(8, 8, 180),
(9, 9, 60),
(10, 10, 45);

INSERT INTO deliveryOrder (idDeliveryProduct, idOrder, statusDeliveryOrder, dateDeliveryOrder)
VALUES
(1, 1, 0, '2023-08-25'),
(2, 2, 0, '2023-08-26'),
(3, 3, 0, '2023-08-27'),
(4, 4, 0, '2023-08-28'),
(5, 5, 0, '2023-08-29'),
(6, 6, 0, '2023-08-30'),
(7, 7, 0, '2023-08-31'),
(8, 8, 0, '2023-09-01'),
(9, 9, 0, '2023-09-02'),
(10, 10, 0, '2023-09-03');







