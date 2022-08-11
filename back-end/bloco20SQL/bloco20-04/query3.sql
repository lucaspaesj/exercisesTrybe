# exclusão de dados
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
# Exemplo no banco sakila:
DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';
SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.actor
WHERE first_name = 'GRACE'; -- ERRO:
-- O banco de dados não vai permitir que você delete o ator chamado "GRACE".
-- Isso acontece porque a coluna actor_id da tabela film_actor é uma chave estrangeira (foreign key)
-- que aponta para a coluna actor_id na tabela actor, e essa chave estrangeira possui a restrição ON DELETE RESTRICT.
-- Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados em um estado inconsistente,
-- pois haveria linhas na tabela film_actor com um actor_id que não mais existiria!
-- Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE
-- Após excluir as referências, podemos excluir o ator com o nome "GRACE":
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
# 1- Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM actor
WHERE first_name = 'KARL';
SELECT * FROM actor WHERE first_name = 'KARL';
# 2- Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM actor
WHERE first_name = 'MATTHEW';
# 3- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM film_text
WHERE description LIKE '%saga%';
# 4- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE film_actor;
SELECT * FROM film_actor;
TRUNCATE film_category;
SELECT * FROM film_category;
# 5- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE
# foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- payment.rental_id
# 6- Exclua o banco de dados e o recrie (use as instruções no início desta aula).
-- DONE