var connection = require("./connect_sql");
var cTable = require("console.table");
var ask = require("./inquirer_prompts");

printTable = function() {
    // connection.connect(function (err) {
    //     if (err) throw err;
    //     console.log("connected as id " + connection.threadId);
        
    
        // TESTING MYSQL DATABASE
        connection.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;

            const fullTable = cTable.getTable(res);
            console.log(fullTable);

            // connection.end();
        });
        
        selectOptions();
    //   });
}

testFunction = function(word) {
    console.log("THIS IS WORKING :)");
    console.log("var = ", word);
    selectOptions();
}

exitProgram = function() {
    console.log("Goodbye!");
    connection.end();
}


module.exports = {
    testFunction: testFunction,
    printTable: printTable,
    exitProgram: exitProgram

};