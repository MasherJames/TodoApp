import todoValidator from "../validators/todoValidator";
import todo from "../../database/models";
import user from "../../database/models";

const Todo = todo.Todo;
const User = user.User;

export default class TodoMiddleware {
  static todoInputValidator(req, res, next) {
    const { errors, isValid } = todoValidator(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }

  // static uniqueTodo(req, res, next) {
  //   User.findByPk(req.user.id).then(user => {
  //     Todo.findOne({ where: { title: req.body.title } })
  //       .then(todo => {
  //         console.log(todo.UserId);
  //         console.log(req.user.id);
  //         if (todo.UserId === req.user.id) {
  //           return res.status(409).json({
  //             message: "Todo with this title already added"
  //           });
  //         }
  //         next();
  //       })
  //       .catch(next);
  //   });
  // }
}
