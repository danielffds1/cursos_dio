-- Criação de consultas interessantes

select * from aluno;
select * from pagamento_aluno;
select * from frequencia;
select * from funcionario;
select * from funcionario_aluno;
select * from Equipamento;
select * from Equipamento_Funcionario;

-- Listando todos os funcionários da academia
select concat(primeiro_nome, ' ', sobrenome_funcionario) as Nome_Completo, endereco, cargo 
from funcionario
order by Nome_Completo;

select cargo, count(*) as qtd_funcionario from funcionario
group by cargo;

-- Listando todos os alunos da academia
select concat(primeiro_name, ' ', sobrenome) as Nome_Completo, data_inicio, telefone, plano_pagamento 
from aluno
order by Nome_Completo;

select plano_pagamento, count(*) as Modalidade_pagamento
from aluno
group by plano_pagamento;

-- Ver o valor que cada aluno já pagou
select concat(a.primeiro_name, ' ', a.sobrenome) as Nome_Completo, sum(valor_pagamento) as pagamento
from aluno as a inner join pagamento_aluno as p on a.id_aluno = p.id_aluno
group by Nome_Completo;

select concat(a.primeiro_name, ' ', a.sobrenome) as Nome_Completo, sum(valor_pagamento) as pagamento
from aluno as a inner join pagamento_aluno as p on a.id_aluno = p.id_aluno
group by Nome_Completo
having pagamento > 500;

-- Frequencia dos alunos
SELECT CONCAT(a.primeiro_name, ' ', a.sobrenome) as nome_completo, a.data_inicio, SUM(f.presenca) as total_presencas
FROM aluno as a
INNER JOIN frequencia as f ON a.id_aluno = f.id_aluno
GROUP BY a.id_aluno, a.primeiro_name, a.sobrenome, a.data_inicio;

-- Saber quais treinadores são responsáveis pelos alunos
select *
from funcionario as f 
inner join funcionario_aluno as fa on f.id_funcionario = fa.id_funcionario
inner join aluno as a on fa.id_aluno = a.id_aluno
where cargo = 'Treinador';

select concat(f.primeiro_nome, ' ', f.sobrenome_funcionario) as Nome_Completo, COUNT(a.primeiro_name) as qtd_alunos, f.cargo
from funcionario as f 
inner join funcionario_aluno as fa on f.id_funcionario = fa.id_funcionario
inner join aluno as a on fa.id_aluno = a.id_aluno
group by Nome_Completo, f.cargo
having cargo = 'Treinador';


 