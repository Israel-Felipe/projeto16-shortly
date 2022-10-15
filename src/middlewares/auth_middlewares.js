import { connection } from "../database/db.js";
import jwt from "jsonwebtoken";

async function auth_validation(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const session = (
      await connection.query(
        `SELECT * FROM sessions WHERE user_id = $1 AND token = $2;`,
        [user.user_id, token]
      )
    ).rows[0];

    if (!session) {
      res.sendStatus(401);
      return;
    }

    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { auth_validation };
