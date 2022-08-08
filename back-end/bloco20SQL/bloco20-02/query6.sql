/* Compara o primeiro e segundo nome e retorna a busca sem duplicações */
SELECT DISTINCT first_name, last_name FROM sakila.actor;
/* Os dados não são apagados, mas mantidos no DB, apenas a busca é retornada diferente */
SELECT DISTINCT first_name FROM sakila.actor;
/*1- Monte uma query para encontrar pares únicos de nomes e idades.*/
SELECT * FROM Escola.Estudantes; /* (10 rows) */
SELECT DISTINCT nome, idade FROM Escola.Estudantes; /* (5 rows) */
/*2- Monte uma query para encontrar somente os nomes únicos.*/
SELECT DISTINCT nome FROM Escola.Estudantes; /* (4 rows) */
/*3- Monte uma query para encontrar somente as idades únicas. */
SELECT DISTINCT idade FROM Escola.Estudantes; /* (4 rows) */