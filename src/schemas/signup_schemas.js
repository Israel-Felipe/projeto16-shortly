import joi from "joi";

export const signup_schemas = joi.object({
  name: joi.string().min(3).max(50).required(),

  email: joi.string().email().required(),

  password: joi.string().required(),

  confirm_password: joi.ref("password"),
});
