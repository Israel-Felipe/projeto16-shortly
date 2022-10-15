import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connection } from "../database/db.js";

async function login_user(req, res) {
  const { email, password } = res.locals.body;

  try {
    const user = (
      await connection.query(`SELECT * FROM users WHERE email = $1;`, [email])
    ).rows[0];
    if (!user) {
      res.sendStatus(401);
      return;
    }

    const password_valid = bcrypt.compareSync(password, user.password);

    if (!password_valid) {
      res.sendStatus(401);
      return;
    }

    const token = jwt.sign(
      {
        user_id: user.id,
      },
      process.env.TOKEN_SECRET
    );

    await connection.query(
      `INSERT INTO sessions (user_id, token) VALUES ($1, $2);`,
      [user.id, token]
    );

    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { login_user };
