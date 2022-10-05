import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';
import connection from './connection';

const conn: Pool = connection; 

const getAll = async (): Promise<User[]> => {
  const result = await conn.execute(
    'SELECT name, email FROM Users',
  );
  const [rows] = result;
  return rows as User[];
};

const getById = async (id: number): Promise<User> => {
  const result = await conn.execute<User & ResultSetHeader>(
    'SELECT name, email FROM Users WHERE id = ?',
    [id],
  );
  const [rows] = result;
  return rows;
};

const create = async (body: User): Promise<number> => {
  const result = await conn.execute<number & ResultSetHeader>(
    'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
    [body.name, body.email, body.password],
  );
  const [rows] = result;
  return rows.insertId;
}

export default {
  getAll,
  getById,
  create,
};
