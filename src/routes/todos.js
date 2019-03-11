import express from "express";
import todoController from "../controllers/TodoController";
import TodoMiddleware from "../utils/middlewares/todoMiddleware";

const todoRouter = express.Router();

todoRouter.post(
  "/",
  TodoMiddleware.todoInputValidator,
  TodoMiddleware.uniqueTodo,
  todoController.createTodo
);

export default todoRouter;
