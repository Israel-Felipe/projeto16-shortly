/* import { connection } from "../database/db.js";
import { customerSchema } from "../schemas/customers.schemas.js";

async function customerBodyValidation(req, res, next) {
  const { name, phone, cpf, birthday } = req.body;

  const validation = customerSchema.validate(
    {
      name,
      phone,
      cpf,
      birthday,
    },
    { abortEarly: false }
  );

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(400).send({ message: errors });
    return;
  }

  res.locals.body = {
    name,
    phone,
    cpf,
    birthday,
  };

  next();
}

async function uniqueCustomerValidation(req, res, next) {
  const { cpf } = res.locals.body;

  try {
    const repeatedCustomer = (
      await connection.query("SELECT * FROM customers WHERE cpf = $1;", [cpf])
    ).rows[0];
    if (repeatedCustomer) {
      res.status(409).send({ message: "Customer already registered" });
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function customerIdValidation(req, res, next) {
  const { id } = req.params;

  try {
    const customer = (
      await connection.query("SELECT * FROM customers WHERE id = $1;", [id])
    ).rows[0];

    if (!customer) {
      res.status(404).send({ message: "Cliente não existe" });
      return;
    }

    res.locals.customer = customer;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function customerCPFValidation(req, res, next) {
  const { customer } = res.locals;
  const { cpf } = res.locals.body;

  try {
    const customerCPF = (
      await connection.query("SELECT * FROM customers WHERE cpf = $1;", [cpf])
    ).rows[0];

    if (customerCPF && customerCPF.id !== customer.id) {
      res.sendStatus(400);
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function customerIdSearchValidation(req, res, next) {
  const { customerId } = req.query;
  if (!customerId) {
    next();
    return;
  }

  try {
    const customer = (
      await connection.query("SELECT * FROM customers WHERE id = $1;", [
        customerId,
      ])
    ).rows[0];

    if (!customer) {
      res.status(404).send({ message: "Cliente não existe" });
      return;
    }

    res.locals.customer = customer;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export {
  customerBodyValidation,
  uniqueCustomerValidation,
  customerIdValidation,
  customerCPFValidation,
  customerIdSearchValidation,
};
 */
