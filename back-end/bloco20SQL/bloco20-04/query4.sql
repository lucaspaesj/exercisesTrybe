# 1-
INSERT INTO actor (first_name, last_name) VALUES
('KEANU', 'REEVES'),
('JESSICA', 'HENWICK');
SELECT * FROM actor ORDER BY actor_id DESC;
# 2-
INSERT INTO film (title, description, release_year,
language_id, original_language_id, length, rating)
VALUES
('Matrix Resurrections', 'The Matrix Resurrections is a 2021 American science fiction action film produced, co-written, and directed by Lana Wachowski. It is the sequel to The Matrix Revolutions (2003) and the fourth installment in the Matrix film franchise. Keanu Reeves, Carrie-Anne Moss, Jada Pinkett Smith, and Lambert Wilson reprise their roles from the previous films, and they are joined by Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, and Priyanka Chopra Jonas. The film is set sixty years after Revolutions and follows Neo, who lives a seemingly ordinary life as a video game developer having trouble with distinguishing fantasy from reality. A group of rebels, with the help of a programmed version of Morpheus, free Neo from a new version of the Matrix and fight a new enemy that holds Trinity captive.',
2021, 1, 1, 148, 'G');
SELECT * FROM film ORDER BY film_id DESC;
# 3-
INSERT INTO film_actor (actor_id, film_id)
VALUES (201, 1001),
(202, 1001);
# 4-
INSERT INTO inventory (film_id, store_id)
VALUES (1001, 1);
# 5-
INSERT INTO customer (store_id, first_name, last_name, email, address_id, active, create_date)
VALUES
(1, 'LUCAS', 'PAES', 'lpjanuzi@gmail.com', 49, 1, now());
# 6-
INSERT INTO rental (rental_date, inventory_id, customer_id, staff_id)
VALUES ('2022-08-09', 4582, 600, 1);
# 7-
UPDATE rental
SET return_date = '2022-08-09'
WHERE customer_id = 600;
# 8-
UPDATE customer
SET active = 0
WHERE customer_id = 600;
# 9-
DELETE FROM film_actor
WHERE actor_id = 201;
DELETE FROM actor
WHERE actor_id = 201;
DELETE FROM film_actor
WHERE actor_id = 202;
DELETE FROM actor
WHERE actor_id = 202;
DELETE FROM rental WHERE rental_id = 16050;
DELETE FROM inventory WHERE inventory_id = 4582;
DELETE FROM film WHERE film_id = 1001;
DELETE FROM customer WHERE customer_id = 600;