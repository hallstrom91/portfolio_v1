const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

// path
app.use(express.static(path.join(__dirname, "dist")));

// host static dirs imgs etc.
app.use("/assets", express.static(path.join(__dirname, "dist", "assets")));
app.use("/images", express.static(path.join(__dirname, "dist", "images")));
app.use(
  "/downloads",
  express.static(path.join(__dirname, "dist", "downloads"))
);

// host dist
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// send email-env vars to app thru server
app.get("/email-vars", (req, res) => {
  const emailVars = {
    service: process.env.EMAILJS_SERVICE,
    template: process.env.EMAILJS_TEMPLATE,
    myKey: process.env.EMAILJS_MYKEY,
  };
  res.json({ emailVars });
  console.log("emailVars", emailVars);
});

app.listen(PORT, () => {
  console.log(`Portfolio is live on port ${PORT}`);
});
