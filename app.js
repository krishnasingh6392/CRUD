const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const userModal = require("./userModal/userModal.js");
const port = process.env.PORT || 4000;
const URI = "mongodb://localhost:27017/rocky";
mongoose
  .connect(URI)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.error(err.message);
  });
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
