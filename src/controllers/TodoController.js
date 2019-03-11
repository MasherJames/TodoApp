import todo from "../database/models";

const Todo = todo.Todo;
export default class TodoController {
  static async createTodo(req, res) {
    try {
      const { title, content } = req.body;
      console.log(title);
      const newTodo = await Todo.create({
        title,
        content,
        UserId: req.user.id
      });
      return res.status(201).json({
        Message: "Todo created successfully",
        newTodo
      });
    } catch (error) {
      if (error) {
        return res.status(400).json({
          Message: "An error occured while creating the todo"
        });
      }
    }
  }

  static async getAllTodos(req, res) {
    try {
      const todos = await Todo.findAll({ where: { UserId: req.user.id } });
      if (!todos.length) {
        return res.status(404).json({
          Message: "You don't have any todo for now"
        });
      }
      return res.status(200).json({
        Message: "Todos retrieved successfully",
        todos
      });
    } catch (error) {
      return res.status(400).json({
        Message: "An error encounterd "
      });
    }
  }

  static async getTodo(req, res) {
    try {
      const id = req.params.id;
      const UserId = req.user.id;
      const todo = await Todo.findOne({ where: { id, UserId } });
      if (todo) {
        return res.status(200).json({
          Message: "Todo successfully retrieved",
          todo
        });
      }
      return res.status(404).json({
        Message: "You don't have a todo with this id"
      });
    } catch (error) {
      return res.status(400).json({
        Message: "An error occured when retrieving the todo"
      });
    }
  }
}
