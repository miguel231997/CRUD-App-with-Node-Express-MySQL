const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM people", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.error("Error querying MySQL:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

module.exports = Router;
