-- Criar um catálogo de álbuns musicais.
-- Entidades:
# Entidade 1: `Álbum`;
# Entidade 2: `Artista`;
# Entidade 3: `Estilo Musical`;
# Entidade 4: `Canção`.
-- Atributos:
# Álbum: `album_id`, `titulo`, `preco`, `estilo_id` e `artista_id`;
# Artista: `artista_id` e `nome`;
# Estilo Musical: `estilo_id` e `nome`;
# Canção: `cancao_id`, `nome` e `album_id`.
-- Relacionamentos:
-- Album - Artista - 1:N
-- Album - Canção - 1:N
-- Canção - Estilo Musical - N:1
# Criando um banco de dados para conter as tabelas:
-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;
-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;
-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;
-- Lista todos os bancos de dados existentes.
SHOW DATABASES;
-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;
