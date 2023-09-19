const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "Miguel",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected to MySQL!");
  } else {
    console.error("Connection to MySQL failed:", err);
  }
});

module.exports = mysqlConnection;
