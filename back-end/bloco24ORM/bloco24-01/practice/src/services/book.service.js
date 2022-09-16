const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);

  return books;
};

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = Book.create({ title, author, pageQuantity });

  return newBook;
};

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  console.log(updatedBook);
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id} });

  console.log(book);
  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};