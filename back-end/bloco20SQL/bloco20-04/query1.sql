USE sakila;
SELECT * FROM staff;
# A query abaixo vai inserir uma linha na tabela nome_da_tabela com os valores em suas colunas correspondentes.
# Apesar de ser possível inserir novos valores sem especificar os nomes das colunas,
# é uma boa prática sempre especificá-los porque:
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
# Inserindo várias linhas de uma vez
# É possível inserir múltiplas linhas em uma tabela com uma única query:
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
# 1- Insira um novo funcionário na tabela sakila.staff.
# Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector.
# Clique na aba columns e verifique quais campos aceitam nulos para te guiar.
# Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username) VALUES
('Lucas', 'Paes', 3, 'lpjanuzi@gmail.com', 1, 1, 'Luke');
# 2- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username) VALUES
('Andre', 'Santos', 4, 'andre@hotmail.com', 2, 1, 'Andre'),
('Luísa', 'Amaral', 2, 'luisa@gmail.com', 1, 1, 'Luisa');
# 3- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas
# pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT staff.first_name, staff.last_name
FROM staff;
SELECT * FROM actor;
# 4- Cadastre três categorias de uma vez só na tabela sakila.category.
SELECT * FROM category;
INSERT INTO category (name) VALUES
('Anime'),
('Test');
# 5- Cadastre uma nova loja na tabela sakila.store.
SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id)
SELECT staff.staff_id, staff.address_id
FROM staff
WHERE first_name = 'Lucas';