import { connection } from "../database/db.js";

async function create_user(req, res) {
  const { name, email, password } = req.body;
  connection
    .query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3);", [
      name,
      email,
      password,
    ])
    .then(() => {
      res.sendStatus(201);
    });
}

export { create_user };
