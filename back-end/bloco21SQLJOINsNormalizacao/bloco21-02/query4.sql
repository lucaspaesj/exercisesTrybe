-- Exemplo da aula:
SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, cy.city, a.address, a.district, co.country
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
INNER JOIN city cy
ON cy.city_id = a.city_id
INNER JOIN country co
ON co.country_id = cy.country_id;
-- Exercícios da aula:
# 1- Busquem todos os nomes das pessoas que possuem pedidos realizados e as pessoas funcionárias que fizeram a operação
SELECT c.CustomerName, CONCAT(e.FirstName, ' ', e.LastName)
FROM customers c
INNER JOIN orders o
ON c.CustomerID = o.CustomerID
INNER JOIN employees e
ON e.EmployeeID = o.EmployeeID;
# 2- Busque todos os nomes de pessoas que possuem pedidos, pessoas funcionárias e empresas relacionadas no envio
SELECT c.CustomerName, CONCAT(e.FirstName, ' ', e.LastName) AS `employee_name`, s.ShipperName
FROM orders o
INNER JOIN customers c
ON c.CustomerID = o.CustomerID
INNER JOIN employees e
ON e.EmployeeID = o.EmployeeID
INNER JOIN shippers s
ON s.ShipperID = o.ShipperID;
# 3- Retorne o CustomerName e OrderId de todos os customers mesmo que não tenham feito compras
SELECT c.CustomerName, o.OrderId
FROM orders o
RIGHT JOIN customers c
ON c.CustomerID = o.CustomerID;