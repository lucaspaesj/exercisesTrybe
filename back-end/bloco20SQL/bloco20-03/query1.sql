USE sakila;
-- WHERE (filtros aprimorados)
SELECT * FROM actor WHERE last_name = 'DAVIS';
SELECT * FROM actor WHERE actor_id = 101;
/* OPERADORES
= IGUAL
<> DIFERENTE
> MAIOR QUE
< MENOR QUE
>= MAIOR IGUAL
<= MENOR IGUAL
AND OPERADOR LÓGICO E
OR OPERADOR LÓGICO OU
IS COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)
NOT NEGAÇÃO
*/
SELECT * FROM film WHERE length > 50 ORDER BY length;
SELECT * FROM film WHERE length < 50 ORDER BY length;
SELECT * FROM film WHERE title <> 'ALIEN CENTER' AND replacement_cost > 20;
-- Filmes permitidos apenas para menores de 18 anos
SELECT * FROM film WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13';
-- Filmes que não foram devolvidos
SELECT * FROM rental WHERE return_date IS NULL;
-- IS de forma booleana
SELECT * FROM staff WHERE active IS NOT TRUE;
SELECT * FROM address WHERE address2 IS NOT NULL;
-- Selecionar os filmes que não começam com a palavra ACADEMY
SELECT * FROM film WHERE title NOT LIKE 'academy%';

