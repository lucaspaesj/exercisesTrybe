-- Como utilizar o LEFT JOIN e o RIGHT JOIN
SELECT * FROM actor;
SELECT * FROM customer;
SELECT c.customer_id, c.first_name, a.actor_id
FROM customer c
LEFT JOIN actor a
ON c.last_name = a.last_name;
-- Vamos visualizar a diferença entre os três joins já vistos até o momento.
# Rode e analise cada uma das três queries a seguir. Busque notar a diferença entre as colunas da direita e
# da esquerda e a quantidade de dados retornados em cada query, como foi mostrado no vídeo.
# Gaste de dois a cinco minutos aqui e depois continue.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
# seleciona as informações de nome de ambas as tabelas e faz um left join = junta as tabelas para retornar
# os resultados em que o sobrenome é igual em ambos os casos, em comparação com a tabela da esquerda - customer
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
# selectiona as informações relativas ao nome de actor e customer, comparando para ver se encontra sobrenomes iguais,
# para então retornar os valores tendo como base a tabela da direita - actor
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
# traz todas as informações de nome e sobrenome nos casos em que o ponto de encontro das tabelas se encontra no sobrenome
# dos atores e clientes, sem retornar null, aqui ele compara ambas as informações de maneira semelhante, rigth e left