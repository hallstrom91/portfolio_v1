import express from "express";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(express.static(path.join(__dirname, "dist")));

app.use("/assets", express.static(path.join(__dirname, "dist", "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio is live on port ${PORT}`);
});
