import connection from "./connection";
import { Pool } from "mysql2/promise";

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }
}