import express from "express";
import "dotenv/config.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from restaurant service");
});

app.listen(PORT, () => {
  console.log(`Restaurant service is running on port ${PORT}`);
});
