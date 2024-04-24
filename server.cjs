const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const helmet = require("helmet");
const emailjs = require("@emailjs/nodejs");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

// path
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
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

//emailjs function
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE,
      process.env.EMAILJS_TEMPLATE,
      {
        name: name,
        email: email,
        message: message,
      },
      {
        publicKey: process.env.EMAILJS_MYKEY,
        privateKey: process.env.EMAILJS_PRIVATE,
      }
    );
    console.log("Epost skickat", response);
    res.status(200).json({ message: "Epost skickat." });
  } catch (error) {
    console.error("Misslyckad epost utskick.", error);
    res.status(500).json({ error: "Ett fel uppstod vid utskick av mail." });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio is live on port ${PORT}`);
});
