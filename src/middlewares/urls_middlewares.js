import { connection } from "../database/db.js";
import { urls_schemas } from "../schemas/urls_schemas.js";

function url_schemas_validation(req, res, next) {
  const { url } = req.body;
  const validation = urls_schemas.validate(
    {
      url,
    },
    { abortEarly: false }
  );

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send({ message: errors });
    return;
  }

  res.locals.body = { url };
  next();
}

async function url_not_duplicate(req, res, next) {
  const { url } = res.locals.body;
  const { user } = res.locals;

  try {
    const url_exist = (
      await connection.query(
        `SELECT * FROM urls WHERE url = $1 and user_id = $2;`,
        [url, user.user_id]
      )
    ).rows[0];

    if (url_exist) {
      res.status(409).send({
        message: `este link já foi encurtado por você`,
        short_url: url_exist.short_url,
      });
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function url_validation_user_id(req, res, next) {
  const { user } = res.locals;
  const { id } = req.params;
  if (!id) {
    res.sendStatus(404);
    return;
  }

  try {
    const url = (
      await connection.query(`SELECT * FROM urls WHERE id = $1`, [id])
    ).rows[0];
    if (!url) {
      res.sendStatus(404);
      return;
    }

    if (user.user_id !== url.user_id) {
      res.sendStatus(401);
      return;
    }

    res.locals.url_id = id;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { url_schemas_validation, url_not_duplicate, url_validation_user_id };
