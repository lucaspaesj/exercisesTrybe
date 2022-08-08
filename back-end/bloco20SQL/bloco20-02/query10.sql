SELECT * FROM sakila.address
ORDER BY address;
-- Acima ele ordena de forma ascendente
SELECT * FROM sakila.address
ORDER BY address DESC;
-- Ordenando mais de uma coluna
SELECT * FROM sakila.address
ORDER BY address, district;
-- Ao usarmos o comando ORDER BY, podemos ordenar os resultados de forma alfabética ou numérica.
-- Logo em seguida, informamos qual coluna iremos usar para ordenar os resultados.
-- Podemos fazer de forma crescente (padrão do comando, porém pode ser usado o ASC) ou de forma decrescente (usando o DESC).
-- Também é possível ordenar por mais de uma coluna.
-- Assim, caso haja valores repetidos na primeira, a tabela será ordenada pelos valores da segunda, e assim por diante.
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;