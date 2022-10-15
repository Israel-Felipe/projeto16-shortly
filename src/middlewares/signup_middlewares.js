import { connection } from "../database/db.js";
import { signup_schemas } from "../schemas/signup_schemas.js";

function signup_schemas_validation(req, res, next) {
  const { name, email, password, confirm_password } = req.body;
  const validation = signup_schemas.validate(
    {
      name,
      email,
      password,
      confirm_password,
    },
    { abortEarly: false }
  );

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send({ message: errors });
    return;
  }

  res.locals.body = { name, email, password };
  next();
}

async function signup_email_not_duplicate(req, res, next) {
  const { email } = res.locals.body;

  try {
    const email_exist = (
      await connection.query(`SELECT * FROM users WHERE email = $1;`, [email])
    ).rows[0];
    if (email_exist) {
      res.sendStatus(409);
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { signup_schemas_validation, signup_email_not_duplicate };
