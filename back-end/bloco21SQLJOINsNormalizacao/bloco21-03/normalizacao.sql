-- Normalização
-- 1ª Forma Normal
# 1- Colunas devem possuir apenas um valor;
# 2- Valores em uma coluna devem ser do mesmo tipo de dados;
# 3- Cada coluna deve possuir um nome único;
# 4- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.
# As tabelas devem ser escaláveis e extensíveis;
-- 2ª Forma Normal
# 1- A tabela deve estar na 1ª Forma Normal;
# 2- A tabela não deve possuir dependências parciais.
-- 3ª Forma Normal
# 1- A tabela deve estar na 1ª e 2ª Formas Normais;
# 2- A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).
-- REF formas normais: https://docs.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description#normalizing-an-example-table