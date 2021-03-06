import Joi from "joi";
import isEmpty from "./isEmpty";
import { todoSchema } from "./schemas";

const todoValidator = data => {
  let errors = {};

  Joi.validate(data, todoSchema, err => {
    if (err) {
      errors.message = err.details[0].message.replace(/\"/gi, "");
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default todoValidator;
