import todo from "../database/models/todo";

const Todo = todo.Todo;

export default class TodoController {
  static async createTodo(req, res) {
    try {
      const newTodo = await Todo.create({
        title: req.body.title,
        content: req.body.content
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
}
