import Joi from "joi";

const userSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .alphanum()
    .min(6)
    .max(15)
    .required(),
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required()
});

const userSchemaLogin = Joi.object().keys({
  password: Joi.string()
    .alphanum()
    .min(6)
    .max(15)
    .required(),
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required()
});

const todoSchema = Joi.object().keys({
  title: Joi.string()
    .min(2)
    .max(15)
    .required(),
  content: Joi.string()
    .min(2)
    .max(100)
    .required()
});

export { userSchema, todoSchema, userSchemaLogin };
