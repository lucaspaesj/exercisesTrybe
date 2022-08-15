SELECT * FROM country;
SELECT * FROM city;
-- JOIN - selectionar informações de duas tabelas diferentes, ou mais
SELECT city.city, city.country_id, country.country
FROM city AS city
INNER JOIN country AS country
ON city.country_id = country.country_id;

SELECT * FROM film;
SELECT f.title, f.language_id, l.name
FROM film AS f
INNER JOIN language AS l
ON f.language_id = l.language_id;

# 1- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou,
# usando as tabelas actor e film_actor.
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT a.actor_id, CONCAT(a.first_name, ' ',  a.last_name) AS full_name, f.film_id
FROM actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;
# 2- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM staff;
SELECT * FROM address;
SELECT CONCAT(s.first_name, ' ',  s.last_name) AS full_name, a.address
FROM staff s
INNER JOIN address a
ON s.address_id = a.address_id;
# 3- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente,
# juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas
# tabelas customer e address.
SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.address
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
ORDER BY full_name DESC
LIMIT 100;
# 4- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que
# contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.address, a.district
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';
# 5- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
# Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, COUNT(a.address) AS quantidade_de_enderecos
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;
# 6- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006.
# Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM staff;
SELECT * FROM payment;
SELECT CONCAT(s.first_name, ' ', s.last_name) AS full_name, AVG(p.amount) AS media
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id
WHERE p.payment_date LIKE '2006%'
GROUP BY s.first_name, s.last_name;
# 7- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor,
# film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM film_actor;
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM actor a
INNER JOIN film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN film f
ON f.film_id = fa.film_id;
