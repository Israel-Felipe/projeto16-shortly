import { connection } from "../database/db.js";

async function login_user(req, res) {
  const { email, password } = req.body;
  connection
    .query("INSERT INTO sessions (user_id, token) VALUES ($1, $2);", [
      email,
      password,
    ])
    .then(() => {
      res.sendStatus(200);
    });
}

export { login_user };
