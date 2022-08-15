CREATE DATABASE IF NOT EXISTS zoo;
-- Exercício 1: 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais.
-- As informações a serem armazenadas sobre cada animal são:
# Nome;

# Espécie;

# Sexo;

# Idade;

# Localização.
-- Tables: animal, employee, manager, animal_employee
CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    specie VARCHAR(100),
    gender VARCHAR(100),
    age INT,
    location VARCHAR(100)
);

CREATE TABLE manager(
	manager_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE employee(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);

CREATE TABLE animal_employee(
	employee_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    CONSTRAINT PRIMARY KEY(employee_id, animal_id)
);