USE PiecesProviders;
-- 1- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT piece, price FROM Provides WHERE provider = 'RBT';

-- 2- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM Provides ORDER BY price DESC LIMIT 5;

-- 3- Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços,
-- começando a lista a partir do 3º item.
SELECT DISTINCT provider, price FROM Provides ORDER BY price DESC LIMIT 4 OFFSET 2;

-- 4- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL.
-- Ordene o resultado pelos preços das peças de forma decrescente.
SELECT piece, price FROM Provides WHERE provider = 'HAL' ORDER BY price DESC;

-- 5- Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(provider) FROM Provides WHERE piece = 1;