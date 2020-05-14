//var connection = require("./public/js/connect_sql");
var accessSQL = require("./public/js/use_sql");

accessSQL.testFunction("hello");
accessSQL.printTable();

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
    

//     // TESTING MYSQL DATABASE
//     connection.query("SELECT * FROM employee", function (err, res) {
//         if (err) throw err;
    
//         // for (let song of res) {
//         //   console.log(song.id, " | ", song.title, " | ", song.artist, " | ", song.genre);
//         // }
//         console.log(res);
    
//         connection.end();
//     });

//   });

