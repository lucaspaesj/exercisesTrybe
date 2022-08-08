USE sakila;
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM actor;
-- Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT last_name) FROM actor;
-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM actor
ORDER BY last_name, first_name DESC;