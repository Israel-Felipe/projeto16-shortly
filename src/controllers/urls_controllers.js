import { nanoid } from "nanoid";
import { connection } from "../database/db.js";

async function short_url(req, res) {
  const { user } = res.locals;
  const { url } = res.locals.body;

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

async function open_short_url(req, res) {
  const { short_url } = req.params;
  if (!short_url) {
    res.status(404).send({ message: "Please enter a short URL" });
    return;
  }

  try {
    const url = (
      await connection.query(
        `SELECT id, url FROM urls WHERE "short_url" = $1;`,
        [short_url]
      )
    ).rows[0];

    if (!url) {
      res.status(404).send({ message: "short url não encontrado" });
      return;
    }

    await connection.query(`INSERT INTO visits (url_id) VALUES ($1);`, [
      url.id,
    ]);

    res.redirect(url.url);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function get_id_url(req, res) {
  const { id } = req.params;

  try {
    const url = (
      await connection.query(
        `SELECT id, short_url, url FROM urls WHERE id = $1;`,
        [id]
      )
    ).rows[0];

    if (!url) {
      res.sendStatus(404);
      return;
    }

    res.send(url);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function delete_url(req, res) {
  const { url_id } = res.locals;

  try {
    await connection.query(`DELETE FROM urls WHERE id = $1;`, [url_id]);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { short_url, open_short_url, get_id_url, delete_url };
