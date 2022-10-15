import joi from "joi";

export const signin_schemas = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
