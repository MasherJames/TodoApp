import express from "express";
import UserController from "../controllers/UserController";
import UserMiddleware from "../utils/middlewares/userMiddleware";

const userRouter = express.Router();

userRouter.post(
  "/register",
  UserMiddleware.userInputValidator,
  UserMiddleware.uniqueUser,
  UserController.registerUser
);

userRouter.post(
  "/login",
  UserMiddleware.userInputValidatorLogin,
  UserController.loginUser
);

export default userRouter;
