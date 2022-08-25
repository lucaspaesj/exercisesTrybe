USE trybecashdb;

CREATE TABLE person {
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(60) NOT NULL,
  phone VARCHAR(20),
  UNIQUE(email)
}engine=InnoDB;

CREATE TABLE logs {
  id INT PRIMARY KEY AUTO_INCREMENT,
  event VARCHAR(100) NOT NULL,
  timestamp BIGINT NOT NULL,
  person_id INT NOT NULL,
  FOREIGN KEY (person_id) REFERENCES person(id)
}engine=InnoDB;

CREATE TABLE transactions {
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL,
  description VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,
  type INT NOT NULL,
  person_id INT NOT NULL,
  FOREIGN KEY (person_id) REFERENCES person(id)
}engine=InnoDB;