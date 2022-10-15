import { connection } from "../database/db.js";
import bcrypt from "bcrypt";

async function create_user(req, res) {
  const { name, email, password } = res.locals.body;

  try {
    const password_hash = bcrypt.hashSync(password, 8);
    await connection.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);",
      [name, email, password_hash]
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { create_user };
