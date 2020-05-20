// ===============================================================================
// CONNECT_SQL.JS
// ===============================================================================

// Implement the mySQL Database
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "employee_tracker"
});

// Initializing connection to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  });

// Exporting the connection function to
// use for queries written in use_sql.js
module.exports = connection;