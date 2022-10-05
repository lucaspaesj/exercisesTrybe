import User from "../interfaces/user.interface";
import userModel from "../models/user.model";

const getAll = async (): Promise<User[]> => {
  const result = await userModel.getAll();
  return result;
};

const getById = async (id: number): Promise<User> => {
  const result = await userModel.getById(id);
  return result;
}

const create = async (body: User): Promise<User> => {
  const id = await userModel.create(body);
  const user = await userModel.getById(id);
  return user;
};

export default {
  getAll,
  getById,
  create,
};
