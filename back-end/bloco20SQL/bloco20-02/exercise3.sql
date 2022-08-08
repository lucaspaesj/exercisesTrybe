USE sakila;
-- Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM language LIMIT 5 OFFSET 1;