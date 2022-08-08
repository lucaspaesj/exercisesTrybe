SELECT * FROM sakila.actor;
/*Conta a quantidade de atores com comandos adjacentes*/
SELECT COUNT(*) FROM sakila.actor;
SELECT COUNT(first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
SELECT COUNT(address) FROM sakila.address;
SELECT COUNT(address2) FROM sakila.address;
SELECT COUNT(district) FROM sakila.address WHERE district = 'Alberta';
/*Quantas senhas temos cadastradas nessa tabela?(sakila.staff)*/
SELECT * FROM sakila.staff;
/*1*/
/*Quantas pessoas temos no total trabalhando para nossa empresa?*/
/*2*/
/*Quantos emails temos cadastrados nessa tabela?*/
/*2*/