import { signin_schemas } from "../schemas/signin_schemas.js";

function signin_schemas_validation(req, res, next) {
  const { email, password } = req.body;
  const validation = signin_schemas.validate(
    {
      email,
      password,
    },
    { abortEarly: false }
  );

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send({ message: errors });
    return;
  }

  res.locals.body = { email, password };
  next();
}

export { signin_schemas_validation };
