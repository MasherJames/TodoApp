import todoValidator from "../validators/todoValidator";
import todo from "../../database/models";

const Todo = todo.Todo;

export default class TodoMiddleware {
  static todoInputValidator(req, res, next) {
    const { errors, isValid } = todoValidator(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }

  static uniqueTodo(req, res, next) {
    Todo.findOne({ where: { title: req.body.title } })
      .then(todo => {
        if (todo) {
          return res.status(409).json({
            message: "Todo with this title already added"
          });
        }
        next();
      })
      .catch(next);
  }
}
