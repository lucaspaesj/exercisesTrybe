-- LIKE:
SELECT * FROM sakila.film
WHERE title LIKE '%don';
-- Resultado da pesquisa. Encontra qualquer resultado finalizando com 'don'
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';
-- Resultado da pesquisa. Encontra qualquer resultado iniciando com 'plu'
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';
-- Resultado da pesquisa. Encontra qualquer resultado que contém 'plu'
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';
-- Resultado da pesquisa. Encontra qualquer resultado que inicia com 'p' e finaliza com 'r'
SELECT * FROM sakila.film
WHERE title LIKE '_C%';
-- Resultado da pesquisa. Encontra qualquer resultado em que o segundo caractere da frase é 'C'
SELECT * FROM sakila.film
WHERE title LIKE '________';
-- Resultado da pesquisa. Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';
-- Resultado da pesquisa. Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
-- Para consolidar esse conhecimento, brinque com os resultados que serão encontrados
-- usando os comandos acima e tente criar suas próprias condições.
-- Depois de ter praticado um pouco com eles, tente encontrar as seguintes informações:
-- 1- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM film WHERE title LIKE '%ace%';
-- 2- Mostre todos os detalhes dos filmes cujas descrições finalizam com china
SELECT * FROM film WHERE description LIKE '%china';
-- 3- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord' LIMIT 2;
-- 4- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
SELECT * FROM film WHERE title LIKE '___gon%';
-- 5- Mostre o único caso em que, a partir do 4° caractere no título do filme,
-- tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT * FROM film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- 6- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- 7- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
