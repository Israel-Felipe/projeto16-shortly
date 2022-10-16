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
      await connection.query(`SELECT * FROM urls WHERE url = $1;`, [url])
    ).rows[0];

    if (url_exist) {
      if (user.user_id === url_exist.user_id) {
        res.status(409).send({
          message: `este link já foi encurtado por você`,
          short_url: url_exist.short_url,
        });
        return;
      }
      res.status(409).send({
        message: `este link já foi encurtado por outro usuário`,
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

export { url_schemas_validation, url_not_duplicate };
