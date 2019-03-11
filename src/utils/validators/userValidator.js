import Joi from "joi";
import isEmpty from "./isEmpty";
import { userSchema } from "./schemas";

const userValidator = data => {
  let errors = {};

  Joi.validate(data, userSchema, err => {
    if (err) {
      errors.message = err.details[0].message.replace(/\"/gi, "");
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default userValidator;
