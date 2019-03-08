import Joi from "joi";

const userSchema = joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: Joi.string().email({ minDomainAtoms: 2 })
});

const todoSchema = joi.object.keys({
  title: Joi.string().regex(/^[a-zA-Z]{2, 15}$/),
  content: Joi.string().regex(/^[a-zA-Z0-9]{2, }$/)
});

export { userSchema, todoSchema };
