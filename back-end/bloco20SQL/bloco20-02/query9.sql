-- Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
-- Tranquilo, não é? Agora, olhando o resultado a seguir, qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?
-- SELECT * FROM table LIMIT 10 OFFSET 5;
