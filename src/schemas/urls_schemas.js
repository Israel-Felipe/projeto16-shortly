import joi from "joi";

const regex_url = new RegExp(
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
);

export const urls_schemas = joi.object({
  url: joi.string().pattern(regex_url).required(),
});
