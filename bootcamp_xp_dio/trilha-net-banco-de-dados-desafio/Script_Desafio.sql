--Query 1 - Buscando o nome e ano dos filmes
SELECT Nome, Ano FROM Filmes

--Query 2 - Buscando o nome e ano dos filmes, ordenados por ordem crescente pelo ano
SELECT Nome, Ano, Duracao 
FROM Filmes
ORDER BY Ano

--Query 3 - Buscar pelo filme de volta para o futuro, trazendo o nome, ano e a duração
SELECT Nome, Ano, Duracao 
FROM Filmes
WHERE Nome = 'De volta para o futuro'

--Query 4 - Buscar os filmes lançados em 1997
SELECT Nome, Ano, Duracao 
FROM Filmes
WHERE Ano = 1997

--Query 5 - Buscar os filmes lançados APÓS o ano 2000
SELECT Nome, Ano, Duracao 
FROM Filmes
Where Ano > 2000
ORDER BY Ano, Duracao 

--Query 6 - Buscar os filmes com a duracao maior que 100 e menor que 150, ordenando pela duracao em ordem crescente
SELECT Nome, Ano, Duracao  
FROM Filmes
WHERE Duracao > 100 AND Duracao < 150
ORDER BY Ano

--Query 7 - Buscar a quantidade de filmes lançadas no ano, agrupando por ano, ordenando pela duracao em ordem decrescente
SELECT Ano, COUNT(*) as Quantidade
FROM Filmes
GROUP BY Ano
ORDER BY Quantidade DESC

--Query 8 - Buscar os Atores do gênero masculino, retornando o PrimeiroNome, UltimoNome
SELECT *, CONCAT(PrimeiroNome, ' ', UltimoNome) AS NomeCompleto 
FROM Atores
WHERE Genero = 'M'

--Query 9 - Buscar os Atores do gênero feminino, retornando o PrimeiroNome, UltimoNome, e ordenando pelo PrimeiroNome
SELECT *, CONCAT(PrimeiroNome, ' ', UltimoNome) AS NomeCompleto
From Atores
WHERE Genero = 'F'
ORDER BY PrimeiroNome

--Query 10 - Buscar o nome do filme e o gênero
SELECT  f.Nome, g.Genero
FROM FilmesGenero as fg
INNER JOIN Filmes as f
ON fg.IdFilme = f.Id
INNER JOIN Generos g
ON fg.IdGenero = g.Id

--Query 11 - Buscar o nome do filme e o gênero do tipo "Mistério"
SELECT f.Nome, g.Genero
FROM FilmesGenero fg
INNER JOIN Filmes as f
ON fg.IdFilme = f.Id
INNER JOIN Generos AS g
ON fg.IdGenero = g.Id
WHERE g.Genero = 'Mistério'

--Query 12 - Buscar o nome do filme e os atores, trazendo o PrimeiroNome, UltimoNome e seu Papel
SELECT a.PrimeiroNome, a.UltimoNome, el.Papel
FROM Filmes as f
INNER JOIN ElencoFilme AS el
ON f.Id = el.IdFilme
INNER JOIN Atores as a
ON a.Id = el.IdAtor