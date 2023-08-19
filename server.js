const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (req, res) => {
  return res.status(200).json({ success: true, message: "Success" });
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`);
});
