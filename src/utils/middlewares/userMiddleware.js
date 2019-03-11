import userValidator from "../validators/userValidator";
import userValidatorLogin from "../validators/loginValidator";
import user from "../../database/models";

const User = user.User;

export default class UserMiddleware {
  static userInputValidator(req, res, next) {
    const { errors, isValid } = userValidator(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }

  static userInputValidatorLogin(req, res, next) {
    const { errors, isValid } = userValidatorLogin(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }

  static uniqueUser(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) {
          return res.status(409).json({
            message: "user with this email already exists"
          });
        }
        next();
      })
      .catch(next);
  }
}
