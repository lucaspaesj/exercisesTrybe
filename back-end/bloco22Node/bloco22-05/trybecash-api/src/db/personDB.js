const connection = require('./connection');

const insert = (person) => connection.execute(
  `INSERT INTO person 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
  [person.first_name, person.last_name, person.email, person.phone],
);

const findAll = () => connection.execute('SELECT * FROM person');

const findById = (id) => connection.execute('SELECT * FROM person WHERE id = ?', [id]);

const updatePerson = (person, id) => connection.execute(
  `UPDATE person
    SET first_name = ?, last_name = ?, email = ?, phone = ?
    WHERE id = ?`,
  [person.first_name, person.last_name, person.email, person.phone, id],
);

const removePerson = (id) => connection.execute('DELETE FROM person WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  updatePerson,
  removePerson
};