import { Router } from "express";

import BookController from "../controllers/book.controller";

import validateBook from "../middlewares/book.middleware";

const router = Router();

const bookController = new BookController();

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.post('/', validateBook, bookController.create);

router.put('/:id', validateBook, bookController.update);

router.delete('/:id', bookController.delete);

export default router;