-- Populando as tabelas criadas

INSERT INTO aluno (primeiro_name, sobrenome, endereco, data_inicio, data_nascimento, telefone, plano_pagamento)
VALUES
    ('Maria', 'Silva', 'Rua A, 123', '2023-01-15', '1995-05-10', '123-4567', 'Mensal'),
    ('João', 'Pereira', 'Rua B, 456', '2023-02-20', '1998-03-12', '987-6543', 'Anual'),
    ('Ana', 'Fernandes', 'Rua C, 789', '2023-03-10', '2000-09-25', '567-1234', 'Semestral'),
    ('Pedro', 'Santos', 'Rua D, 321', '2023-04-05', '1997-12-08', '234-5678', 'Mensal'),
    ('Marta', 'Oliveira', 'Rua E, 654', '2023-05-12', '1996-07-15', '876-5432', 'Anual'),
    ('Lucas', 'Cruz', 'Rua F, 987', '2023-06-08', '1999-11-20', '432-8765', 'Semestral'),
    ('Camila', 'Ribeiro', 'Rua G, 345', '2023-07-25', '2001-04-30', '678-2345', 'Mensal'),
    ('Ricardo', 'Rodrigues', 'Rua H, 678', '2023-08-03', '1994-08-03', '345-6789', 'Anual'),
    ('Julia', 'Machado', 'Rua I, 789', '2023-09-18', '1993-02-15', '987-3456', 'Semestral'),
    ('Gustavo', 'Ferreira', 'Rua J, 234', '2023-10-22', '2002-07-05', '123-7890', 'Mensal');

INSERT INTO pagamento_aluno (id_aluno, data_pagamento, valor_pagamento, metodo_pagamento, status_pagamento)
VALUES
    (1, '2023-01-05', 100.00, 'Cartão', 'Pago'),
    (2, '2023-02-10', 350.00, 'Dinheiro', 'Pago'),
    (3, '2023-03-15', 180.00, 'Pix', 'Pago'),
    (4, '2023-04-20', 75.00, 'Cartão', 'Pago'),
    (5, '2023-05-25', 450.00, 'Dinheiro', 'Pago'),
    (6, '2023-06-02', 270.00, 'Pix', 'Pago'),
    (7, '2023-07-08', 110.00, 'Cartão', 'Pago'),
    (8, '2023-08-12', 400.00, 'Dinheiro', 'Pago'),
    (9, '2023-09-17', 220.00, 'Pix', 'Pago'),
    (10, '2023-10-22', 130.00, 'Cartão', 'Pago');

INSERT INTO frequencia (id_aluno, data_presenca, presenca)
VALUES
    (1, '2023-01-01', 'Sim'),
    (1, '2023-01-05', 'Sim'),
    (1, '2023-01-05', 'Sim'),
    (1, '2023-01-10', 'Sim'),
    (1, '2023-01-15', 'Sim'),
    (2, '2023-01-05', 'Sim'),
    (2, '2023-02-05', 'Sim'),
    (2, '2023-01-10', 'Não'),
    (2, '2023-01-15', 'Sim'),
    (3, '2023-01-05', 'Sim'),
    (3, '2023-01-10', 'Sim'),
    (3, '2023-01-15', 'Sim'),
    (4, '2023-01-05', 'Sim'),
    (4, '2023-01-10', 'Não'),
    (4, '2023-01-15', 'Não'),
    (5, '2023-01-05', 'Sim'),
    (5, '2023-01-10', 'Sim'),
    (5, '2023-01-15', 'Sim'),
    (6, '2023-01-05', 'Sim'),
    (6, '2023-01-10', 'Não'),
    (6, '2023-01-15', 'Sim'),
    (7, '2023-01-05', 'Sim'),
    (7, '2023-01-10', 'Sim'),
    (7, '2023-01-15', 'Sim'),
    (8, '2023-01-05', 'Sim'),
    (8, '2023-01-10', 'Não'),
    (8, '2023-01-15', 'Sim'),
    (9, '2023-01-05', 'Sim'),
    (9, '2023-01-10', 'Sim'),
    (9, '2023-01-15', 'Sim'),
    (10, '2023-01-05', 'Sim'),
    (10, '2023-01-10', 'Não'),
    (10, '2023-01-15', 'Sim');


INSERT INTO funcionario (primeiro_nome, sobrenome_funcionario, endereco, data_inicio, data_nascimento, telefone, cargo)
VALUES
    ('Carlos', 'Santos', 'Av. X, 123', '2023-01-10', '1980-06-20', '123-4567', 'Treinador'),
    ('Ana', 'Oliveira', 'Av. Y, 456', '2023-02-15', '1992-03-12', '987-6543', 'Recepcionista'),
    ('Mário', 'Ferreira', 'Av. Z, 789', '2023-03-20', '1975-09-25', '567-1234', 'Treinador'),
    ('Renata', 'Silva', 'Av. W, 321', '2023-04-25', '1985-12-08', '234-5678', 'Recepcionista'),
    ('Paulo', 'Ribeiro', 'Av. U, 654', '2023-05-30', '1990-07-15', '876-5432', 'Treinador'),
    ('Lúcia', 'Cruz', 'Av. V, 987', '2023-06-05', '1988-11-20', '432-8765', 'Recepcionista'),
    ('Fernando', 'Machado', 'Av. T, 234', '2023-07-10', '1982-04-30', '678-2345', 'Treinador'),
    ('Juliana', 'Pereira', 'Av. S, 567', '2023-08-15', '1995-08-03', '345-6789', 'Recepcionista'),
    ('Eduardo', 'Gomes', 'Av. R, 789', '2023-09-20', '1987-02-15', '987-3456', 'Treinador'),
    ('Mariana', 'Lima', 'Av. Q, 123', '2023-10-25', '1991-07-05', '123-7890', 'Recepcionista');
    
-- Vinculando os primeiros três funcionários aos primeiros três alunos
INSERT INTO funcionario_aluno (id_funcionario, id_aluno)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

-- Vinculando os próximos três funcionários aos próximos três alunos
INSERT INTO funcionario_aluno (id_funcionario, id_aluno)
VALUES
    (4, 4),
    (5, 5),
    (6, 6);

-- Vinculando os últimos quatro funcionários aos últimos quatro alunos
INSERT INTO funcionario_aluno (id_funcionario, id_aluno)
VALUES
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10);

INSERT INTO equipamento (nome_equipamento, numero_serie, data_aquisicao, condicao_equipamento, valor_equipamento)
VALUES
    ('Esteira', 1001, '2022-12-01', 'Bom estado', 2000.00),
    ('Bicicleta Ergométrica', 2002, '2023-01-15', 'Em manutenção', 1500.00),
    ('Máquina de Musculação', 3003, '2022-11-10', 'Bom estado', 2500.00),
    ('Corda de Pular', 4004, '2023-02-20', 'Fora de Serviço', 50.00),
    ('Haltere', 5005, '2023-03-05', 'Bom estado', 100.00),
    ('Bola de Pilates', 6006, '2023-04-12', 'Bom estado', 30.00),
    ('Step', 7007, '2023-05-18', 'Em manutenção', 80.00),
    ('Barra de Pesos', 8008, '2023-06-25', 'Bom estado', 120.00),
    ('Elíptico', 9009, '2023-07-10', 'Fora de Serviço', 1800.00),
    ('Escada de Agilidade', 10010, '2023-08-05', 'Bom estado', 40.00);

-- Vinculando os primeiros três funcionários aos primeiros três equipamentos
INSERT INTO equipamento_funcionario (id_funcionario, id_equipamento)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

-- Vinculando os próximos três funcionários aos próximos três equipamentos
INSERT INTO equipamento_funcionario (id_funcionario, id_equipamento)
VALUES
    (4, 4),
    (5, 5),
    (6, 6);

-- Vinculando os últimos quatro funcionários aos últimos quatro equipamentos
INSERT INTO equipamento_funcionario (id_funcionario, id_equipamento)
VALUES
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10);

INSERT INTO aluno (primeiro_name, sobrenome, endereco, data_inicio, data_nascimento, telefone, plano_pagamento)
VALUES
    ('Rafael', 'Pinto', 'Rua K, 987', '2023-11-05', '1994-04-15', '345-6789', 'Mensal'),
    ('Sofia', 'Mendes', 'Rua L, 654', '2023-11-10', '1997-09-30', '789-1234', 'Anual'),
    ('Eduarda', 'Farias', 'Rua M, 321', '2023-11-15', '1999-02-20', '234-5678', 'Semestral'),
    ('Vinícius', 'Mello', 'Rua N, 789', '2023-11-20', '1993-07-10', '876-5432', 'Mensal'),
    ('Clara', 'Nunes', 'Rua O, 123', '2023-11-25', '2001-01-05', '432-8765', 'Anual'),
    ('Hugo', 'Garcia', 'Rua P, 456', '2023-12-01', '1998-11-15', '678-2345', 'Semestral'),
    ('Valentina', 'Pereira', 'Rua Q, 789', '2023-12-05', '1996-05-25', '345-7890', 'Mensal'),
    ('Enzo', 'Lima', 'Rua R, 123', '2023-12-10', '1995-08-08', '987-3456', 'Anual'),
    ('Isabella', 'Santos', 'Rua S, 456', '2023-12-15', '2000-03-12', '123-9876', 'Semestral'),
    ('Leonardo', 'Ferreira', 'Rua T, 789', '2023-12-20', '1992-06-22', '678-5678', 'Mensal');

-- Vinculando os primeiros três funcionários aos novos três alunos (alunos 11, 12 e 13)
INSERT INTO funcionario_aluno (id_funcionario, id_aluno)
VALUES
    (1, 11),
    (2, 12),
    (3, 13);

-- Vinculando os próximos três funcionários aos próximos três alunos (alunos 14, 15 e 16)
INSERT INTO funcionario_aluno (id_funcionario, id_aluno)
VALUES
    (4, 14),
    (5, 15),
    (6, 16);

-- Vinculando os últimos quatro funcionários aos últimos quatro alunos (alunos 17, 18, 19 e 20)
INSERT INTO funcionario_aluno (id_funcionario, id_aluno)
VALUES
    (7, 17),
    (8, 18),
    (9, 19),
    (10, 20);
    
-- Inserção de pagamentos adicionais para os alunos de ID 1 a 10
INSERT INTO pagamento_aluno (id_aluno, data_pagamento, valor_pagamento, metodo_pagamento, status_pagamento)
VALUES
    -- Alunos de ID 1 a 5
    (1, '2023-01-05', 100.00, 'Cartão', 'Pago'),
    (1, '2023-02-05', 100.00, 'Dinheiro', 'Pago'),
    (2, '2023-01-10', 350.00, 'Cartão', 'Pago'),
    (2, '2023-02-10', 350.00, 'Dinheiro', 'Pago'),
    (3, '2023-01-15', 180.00, 'Dinheiro', 'Pago'),
    (3, '2023-02-15', 180.00, 'Cartão', 'Pago'),
    (4, '2023-01-20', 75.00, 'Dinheiro', 'Pago'),
    (4, '2023-02-20', 75.00, 'Cartão', 'Pago'),
    (5, '2023-01-25', 450.00, 'Dinheiro', 'Pago'),
    (5, '2023-02-25', 450.00, 'Cartão', 'Pago'),
    -- Alunos de ID 6 a 10
    (6, '2023-01-01', 270.00, 'Dinheiro', 'Pago'),
    (6, '2023-02-01', 270.00, 'Pix', 'Pago'),
    (7, '2023-01-05', 110.00, 'Cartão', 'Pago'),
    (7, '2023-02-05', 110.00, 'Pix', 'Pago'),
    (8, '2023-01-10', 400.00, 'Dinheiro', 'Pago'),
    (8, '2023-02-10', 400.00, 'Cartão', 'Pago'),
    (9, '2023-01-15', 220.00, 'Dinheiro', 'Pago'),
    (9, '2023-02-15', 220.00, 'Pix', 'Pago'),
    (10, '2023-01-20', 130.00, 'Cartão', 'Pago'),
    (10, '2023-02-20', 130.00, 'Pix', 'Pago');

-- Inserção de pagamentos adicionais para os alunos de ID 11 a 20
INSERT INTO pagamento_aluno (id_aluno, data_pagamento, valor_pagamento, metodo_pagamento, status_pagamento)
VALUES
    -- Alunos de ID 11 a 15
    (11, '2023-11-05', 100.00, 'Cartão', 'Pago'),
    (11, '2023-12-05', 100.00, 'Dinheiro', 'Pago'),
    (12, '2023-11-10', 350.00, 'Cartão', 'Pago'),
    (12, '2023-12-10', 350.00, 'Dinheiro', 'Pago'),
    (13, '2023-11-15', 180.00, 'Dinheiro', 'Pago'),
    (13, '2023-12-15', 180.00, 'Cartão', 'Pago'),
    (14, '2023-11-20', 75.00, 'Dinheiro', 'Pago'),
    (14, '2023-12-20', 75.00, 'Cartão', 'Pago'),
    (15, '2023-11-25', 450.00, 'Dinheiro', 'Pago'),
    (15, '2023-12-25', 450.00, 'Cartão', 'Pago'),
    -- Alunos de ID 16 a 20
    (16, '2023-12-01', 270.00, 'Dinheiro', 'Pago'),
    (16, '2023-12-01', 270.00, 'Pix', 'Pago'),
    (17, '2023-12-05', 110.00, 'Cartão', 'Pago'),
    (17, '2023-12-05', 110.00, 'Pix', 'Pago'),
    (18, '2023-12-10', 400.00, 'Dinheiro', 'Pago'),
    (18, '2023-12-10', 400.00, 'Cartão', 'Pago'),
    (19, '2023-12-15', 220.00, 'Dinheiro', 'Pago'),
    (19, '2023-12-15', 220.00, 'Pix', 'Pago'),
    (20, '2023-12-20', 130.00, 'Cartão', 'Pago'),
    (20, '2023-12-20', 130.00, 'Pix', 'Pago');
    

-- Frequência para alunos de ID 11 a 20 (datas aleatórias)
INSERT INTO frequencia (id_aluno, data_presenca, presenca)
VALUES
    (11, '2023-01-05', 'Sim'),
    (11, '2023-01-10', 'Sim'),
    (11, '2023-01-15', 'Sim'),
    (12, '2023-01-05', 'Sim'),
    (12, '2023-01-10', 'Não'),
    (12, '2023-01-15', 'Sim'),
    (13, '2023-01-05', 'Sim'),
    (13, '2023-01-10', 'Sim'),
    (13, '2023-01-15', 'Sim'),
    (14, '2023-01-05', 'Sim'),
    (14, '2023-01-10', 'Não'),
    (14, '2023-01-15', 'Não'),
    (15, '2023-01-05', 'Sim'),
    (15, '2023-01-10', 'Sim'),
    (15, '2023-01-15', 'Sim'),
    (16, '2023-01-05', 'Sim'),
    (16, '2023-01-10', 'Não'),
    (16, '2023-01-15', 'Sim'),
    (17, '2023-01-05', 'Sim'),
    (17, '2023-01-10', 'Sim'),
    (17, '2023-01-15', 'Sim'),
    (18, '2023-01-05', 'Sim'),
    (18, '2023-01-10', 'Não'),
    (18, '2023-01-15', 'Sim'),
    (19, '2023-01-05', 'Sim'),
    (19, '2023-01-10', 'Sim'),
    (19, '2023-01-15', 'Sim'),
    (20, '2023-01-05', 'Sim'),
    (20, '2023-01-10', 'Não'),
    (20, '2023-01-15', 'Sim');





