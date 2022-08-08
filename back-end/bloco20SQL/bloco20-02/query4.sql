USE sakila;
/*1- Escreva uma query que selecione todas as colunas da tabela city;*/
SELECT * FROM city;
/*2- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;*/
SELECT first_name, last_name FROM customer;
/*3- Escreva uma query que exiba todas as colunas da tabela rental;*/
SELECT * FROM rental;
/*4- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;*/
SELECT title, description, release_year FROM film;
/*5- Utilize o SELECT para explorar todas as tabelas do banco de dados.*/
SELECT * FROM actor;
SELECT * FROM address;
SELECT * FROM category;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM customer;
SELECT * FROM film;
SELECT * FROM film_actor;
SELECT * FROM film_category;
SELECT * FROM film_text;
SELECT * FROM inventory;
SELECT * FROM language;
SELECT * FROM payment;
SELECT * FROM rental;
SELECT * FROM staff;
SELECT * FROM store;