-- Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT
-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

# 1- Monte um query que exiba:
# A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
# A duração mínima dos filmes como 'Duração Mínima';
# A duração máxima dos filmes como 'Duração Máxima';
# A soma de todas as durações como 'Tempo de Exibição Total';
# E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT * FROM film;
SELECT
	ROUND(AVG(length)) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(*) AS 'Filmes Registrados'
FROM film;