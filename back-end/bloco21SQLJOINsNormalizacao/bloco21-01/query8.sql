-- 1- Média de dias que as pessoas ficam com a fita
SELECT customer_id, AVG(DATEDIFF(return_date, rental_date)) AS diff FROM sakila.rental GROUP BY customer_id;
-- 2- Tempo máximo, tempo mínimo e média de tempo dos filmes lançados em 2006 por rating
SELECT * FROM film;
SELECT
	rating,
    release_year,
	MAX(length) AS max,
    MIN(length) AS min,
    AVG(length) AS avg
FROM film
GROUP BY rating, release_year
HAVING release_year = 2006;
# 3- Qual o valor recebido dentro de cada mes
SELECT * FROM payment;
SELECT
	YEAR(payment_date) as ano,
    MONTH(payment_date)as mes,
    SUM(amount) AS soma
FROM payment
GROUP BY ano, mes
ORDER BY ano, mes;