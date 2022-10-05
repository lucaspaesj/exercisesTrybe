import { Request, Response } from "express";
import userService from "../services/user.service";
import statusCodes from "../statusCodes";

const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  res.status(statusCodes.OK).json(users);
};

const getById = async (req: Request, res: Response) => {
  const user = await userService.getById(Number(req.params.id));
  res.status(statusCodes.OK).json(user);
};

const create = async (req: Request, res: Response) => {
  const createdUser = await userService.create(req.body);
  res.status(statusCodes.CREATED).json(createdUser);
};

export default {
  getAll,
  getById,
  create,
};
