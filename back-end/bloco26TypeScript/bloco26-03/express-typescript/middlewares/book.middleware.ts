import { NextFunction, Request, Response } from "express";
import statusCodes from "../statusCodes";
import Book from '../interfaces/book.interface';

const properties = ['title', 'price', 'author', 'isbn'];

const validateProperties = (book: Book): [boolean, string | null] => {
  for (let i = 0; i < properties.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
};

const validateValues = (book: Book): [boolean, string | null] => {
  const entries = Object.entries(book);
  for (let i = 0; i < entries.length; i++) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }

  return [true, null];
};

const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const book: Book = req.body;

  let [valid, property] = validateProperties(book);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório`,
    );
  }

  [valid, property] = validateValues(book);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  next();
};

export default validateBook;