import express from "express";
import http from "http";
import morgan from "morgan";
import passport from "passport";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import passportConf from "./config/passport";
import { todoRouter, userRouter } from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
passportConf(passport);

const prefix = "/api/v1";
app.use(
  `${prefix}/todo/`,
  passport.authenticate("jwt", { session: false }),
  todoRouter
);
app.use(`${prefix}/users/`, userRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    Message: "URL DOES NOT EXIST, Please counter check"
  });
});

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
