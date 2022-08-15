-- SELF JOIN
-- É possível fazer pesquisas e comparações dentro da própria tabela através do SELF JOIN
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.manager_id = Manager.employee_id;

# 1- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos
# (department) são diferentes.
SELECT
e.department_id AS department,
e.employee_id AS employee,
CONCAT(e.first_name, " ", e.last_name) AS "Nome da Pessoa Colaboradora",
m.department_id AS department,
m.employee_id AS manager,
CONCAT(m.first_name, " ", m.last_name) AS "Nome Gerente"
FROM employees AS e
INNER JOIN employees AS m ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;
# 2- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT CONCAT(m.first_name, " ", m.last_name) AS nome_gerente, COUNT(*) pessoas_lideradas
FROM employees AS m
INNER JOIN employees AS e
ON e.manager_id = m.employee_id
GROUP BY m.employee_id;
