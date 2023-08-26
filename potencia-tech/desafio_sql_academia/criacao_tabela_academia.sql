-- Criação da Tabela Academia

drop database academia;

create database if not exists academia;
use academia;

create table aluno(
	id_aluno int auto_increment not null primary key,
    primeiro_name varchar(20) not null,
    sobrenome varchar(45),
    aluno_ativo_desativo bool default true,
    endereco varchar(45),
    data_inicio date,
    data_nascimento date,
    telefone varchar(20),
    plano_pagamento enum('Mensal', 'Semestral', 'Anual')
);

alter table aluno auto_increment=1;

create table pagamento_aluno(
	id_pagamento_aluno int auto_increment not null,
    id_aluno int,
    data_pagamento date,
    valor_pagamento float,
    metodo_pagamento enum('Cartão', 'Dinheiro', 'Pix'),
    status_pagamento enum('Pendente', 'Pago'),
    primary key(id_pagamento_aluno, id_aluno),
    constraint fk_pagamento_aluno foreign key (id_aluno) references aluno(id_aluno)
		on update cascade
);

alter table pagamento_aluno auto_increment=1;

CREATE TABLE frequencia (
    id_frequencia int auto_increment primary key,
    id_aluno int,
    data_presenca date,
    presenca enum('Sim', 'Não'),
    constraint fk_frequencia_aluno foreign key (id_aluno) references aluno(id_aluno)
);

create table funcionario(
	id_funcionario int not null auto_increment primary key,
    primeiro_nome varchar(20),
    sobrenome_funcionario varchar(45),
    funcionario_ativo_desativo bool default true,
    endereco varchar(45),
    data_inicio date,
    data_nascimento date,
    telefone varchar(45),
    cargo enum('Treinador', 'Recepcionista')
);

alter table funcionario auto_increment=1;

create table funcionario_aluno(
	id_funcionario int,
    id_aluno int,
	constraint fk_funcionario foreign key (id_funcionario) references funcionario(id_funcionario)
		on update cascade,
	constraint fk_aluno foreign key (id_aluno) references aluno(id_aluno)
		on update cascade
);

create table equipamento(
	id_equipamento int not null auto_increment primary key,
    nome_equipamento varchar(45),
    numero_serie int,
    data_aquisicao date,
    condicao_equipamento enum('Bom estado', 'Em manutenção', 'Fora de Serviço'),
    valor_equipamento float
);

alter table equipamento auto_increment=1;

create table equipamento_funcionario(
	id_funcionario int,
    id_equipamento int,
    primary key(id_funcionario, id_equipamento),
    constraint fk_funcionario_equipamento foreign key (id_funcionario) references funcionario(id_funcionario)
		on update cascade,
	constraint fk_equipamento foreign key (id_equipamento) references equipamento(id_equipamento)
		on update cascade
);