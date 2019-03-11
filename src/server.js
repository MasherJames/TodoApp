import express from "express";
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { todoRouter, userRouter } from "./routes";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const prefix = "/api/v1";

app.use(`${prefix}/todo/`, todoRouter);
app.use(`${prefix}/users/`, userRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "URL DOES NOT EXIST, Please counter check"
  });
});

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
