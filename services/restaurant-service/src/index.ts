import express from "express";
import "dotenv/config.js";
import cors from "cors";
import { connectDb, disconnectDb } from "./config/db.ts";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from restaurant service");
});

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Restaurant service is running on port ${PORT}`);
});

process.on("SIGINT", async () => {
  await disconnectDb();
  process.exit(0);
});
