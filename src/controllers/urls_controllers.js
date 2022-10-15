import { nanoid } from "nanoid";
import { connection } from "../database/db.js";

async function short_url(req, res) {
  const { user } = res.locals;
  const { url } = req.body;

  try {
    const short_url = nanoid(8);
    await connection.query(
      "INSERT INTO urls (user_id, url, short_url) VALUES ($1, $2, $3);",
      [user.user_id, url, short_url]
    );

    res.status(201).send({ short_url });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { short_url };
