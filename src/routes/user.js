import express from "express";
import passport from "passport";
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

userRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email"] })
);

userRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", UserController.socialAuth)
);

export default userRouter;
