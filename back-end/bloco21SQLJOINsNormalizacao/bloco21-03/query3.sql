-- Exercício 1: 🚀 Normalize a tabela a seguir para a 1ª Forma Normal.
# Funcionario_id	Nome	Sobrenome	Contato	Contato	DataCadastro	Setor
# 12	Joseph	Rodrigues	jo@gmail.com	(35)998552-1445	2020-05-05 08:50:25	Administração, Vendas
# 13	André	Freeman	andre1990@gmail.com	(47)99522-4996	5 de Fevereiro de 2020	Operacional
# 14	Cíntia	Duval	cindy@outlook.com	(33)99855-4669	2020-05-05 10:55:35	Estratégico, Vendas
# 15	Fernanda	Mendes	fernandamendes@yahoo.com	(33)99200-1556	2020-05-05 11:45:40	Marketing
-- Exercício 2: 🚀 Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior,
-- transforme-a agora na 2ª Forma Normal.
# Exerício 3: 🚀 Monte uma query que:
# Crie um banco de dados chamado normalization;
DROP SCHEMA IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;
# Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
CREATE TABLE funcionarios(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(100),
    data_cadastro VARCHAR(100)
)ENGINE=InnoDB;
CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
)ENGINE=InnoDB;
CREATE TABLE funcionarios_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
)ENGINE=InnoDB;
# Popule todas as tabelas com os dados fornecidos nos exercícios.
INSERT INTO funcionarios (funcionario_id, nome, sobrenome, email, telefone, data_cadastro)
VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', 985521445, '05/05/2020 08:50'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', 995224996, '05/02/2020 00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', 998554669, '05/05/2020 10:55'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', 992001556, '05/05/2020 11:45');
UPDATE funcionarios
SET telefone = 992001556
WHERE funcionario_id = 15;
INSERT INTO setor (nome)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');
INSERT INTO funcionarios_setor (funcionario_id, setor_id)
VALUES
(12, 1),
(12, 2),
(13, 3),
(14, 4),
(14, 2),
(15, 5);