USE sakila;
-- Selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM film;
-- Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento,
-- a duração, a classificação indicativa e o custo de substituição.
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, rental_duration, rating, replacement_cost FROM film
ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;