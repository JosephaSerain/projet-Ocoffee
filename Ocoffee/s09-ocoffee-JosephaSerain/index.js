require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./app/router");

const app = express();

app.set("views", path.join(__dirname, "app", "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`OCoffee écoute le port ${process.env.PORT}`);
  });