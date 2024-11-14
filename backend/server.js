const mysql2 = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL Connection
const con = mysql2.createConnection({

  host: "localhost",
  user: "root",
  password: "",
  database: "registration",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
