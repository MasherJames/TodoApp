import todo from "../database/models";

const Todo = todo.Todo;
export default class TodoController {
  static async createTodo(req, res) {
    try {
      const { title, content } = req.body;
      console.log(title);
      const newTodo = await Todo.create({
        title,
        content
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
