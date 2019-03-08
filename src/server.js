import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
