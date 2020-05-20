var mysql = require("mysql");
var ask = require("./inquirer_prompts");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "employee_tracker"
});


// SEE IF HAVING THIS FUNCTION WRITTEN IN HERE AUTO USES THIS FUNCTION

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    
    // console.log("connected as id " + connection.threadId);

  });


module.exports = connection;