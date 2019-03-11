import Joi from "joi";
import isEmpty from "./isEmpty";
import { userSchemaLogin } from "./schemas";

const userValidatorLogin = data => {
  let errors = {};

  Joi.validate(data, userSchemaLogin, err => {
    if (err) {
      errors.message = err.details[0].message.replace(/\"/gi, "");
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default userValidatorLogin;
