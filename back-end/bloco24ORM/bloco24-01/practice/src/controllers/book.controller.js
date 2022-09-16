const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error500Message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error500Message);
  }
};

const createBook = async (req, res) => {
  try {
    const { body } = req;

    if (!body.title || !body.author ) return res.status(400).json({ message: 'Campos faltantes' });

    const newBook = await BookService.createBook(body);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error500Message);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!body.title || !body.author ) return res.status(400).json({ message: 'Campos faltantes' });

    const updatedBook = await BookService.updateBook(id, body);

    if (!updatedBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Book updated' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error500Message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const removedBook = await BookService.deleteBook(id);

    if (!removedBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error500Message);
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};