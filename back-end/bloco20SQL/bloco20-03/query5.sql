/*
DATE - Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31
DATETIME - Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.
*/
SELECT * FROM sakila.payment;
-- Maneiras de encontrar dados por data
-- Vamos dizer que queremos encontrar pagamentos realizados na data 2005-07-31 na tabela sakila.payment.
-- Há várias formas de fazer isso.
-- Usando a função DATE(coluna_do_tipo_date):
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
-- Usando LIKE para valores aproximados:
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
-- Usando BETWEEN:
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
-- Às vezes você está interessado em apenas uma parte de uma data, como o ano ou as horas. 
-- MySQL possui funções que retornam partes específicas de uma data ou hora.
-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
-- 1- Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT COUNT(payment_date) FROM payment WHERE DATE(payment_date) = '2005-05-25';
-- 2- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
SELECT COUNT(payment_date) FROM payment WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';
-- 3- Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
-- Utilize a coluna rental_date para extrair as informações.
SELECT DATE(rental_date) FROM rental WHERE rental_id = 10330;
SELECT YEAR(rental_date) FROM rental WHERE rental_id = 10330;
SELECT MONTH(rental_date) FROM rental WHERE rental_id = 10330;
SELECT DAY(rental_date) FROM rental WHERE rental_id = 10330;
SELECT HOUR(rental_date) FROM rental WHERE rental_id = 10330;
SELECT MINUTE(rental_date) FROM rental WHERE rental_id = 10330;
SELECT SECOND(rental_date) FROM rental WHERE rental_id = 10330;
-- 4- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
SELECT * FROM payment;
SELECT * FROM payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;