import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db";

const app = express();

const port = process.env.PORT;

connectDb();

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
