import express from "express";
import todoController from "../controllers/TodoController";
import TodoMiddleware from "../utils/middlewares/todoMiddleware";

const todoRouter = express.Router();

todoRouter.post(
  "/",
  TodoMiddleware.todoInputValidator,
  // TodoMiddleware.uniqueTodo,
  todoController.createTodo
);

todoRouter.get("/", todoController.getAllTodos);

todoRouter.get("/:id", todoController.getTodo);
todoRouter.delete("/:id", todoController.deleteTodo);

export default todoRouter;
