var connection = require("./connect_sql");
var cTable = require("console.table");
var ask = require("./inquirer_prompts");


printTable = function(tableType) {

    var queryLine = "SELECT * FROM " + tableType;

    connection.query(queryLine, function (err, res) {
        if (err) throw err;

        const viewTable = cTable.getTable(res);
        console.log(viewTable);
        selectOptions();
    });
    
}

getSavedChoices = function(columnName, tableName) {
    var queryLine = "SELECT " + columnName + " FROM " + tableName;
    connection.query(queryLine, function (err, res) {
        if (err) throw err;

        // const fullTable = cTable.getTable(res);
        // console.log(fullTable);
        return res;
        
    });
};

saveNewEntry = function(tableName, newEntryArray) {
    console.log("Entered saveNewEntry function!");
    var columnNames = [];
    
    if(tableName === "employee") {
        columnNames = ["first_name", "last_name", "role_id", "manager_id"];
    }
    else if(tableName === "department") {
        columnNames = "department_name"
    }
    else {
        columnNames = ["title", "salary", "department_id"];
    }
    console.log("columnNames = ", columnNames);

    var queryLine = "INSERT INTO " + tableName + " (" + columnNames + ") VALUES (" + newEntryArray + ")";
    console.log("queryLine = ", queryLine);
    connection.query(queryLine, function (err, res) {
        if (err) throw err;
        
        console.log("New Employee saved!");

        selectOptions();
    })
};

deleteEntry = function(tableName, selectedEntry) {
    var queryLine = "DELETE FROM " + tableName + " WHERE id = " + selectedEntry;
    console.log("queryLine = ", queryLine);
    connection.query(queryLine, function (err, res) {
        if (err) throw err;
        
        console.log("Entry Deleted!");

        selectOptions();
    })
};

updateEntry = function(tableName, updatedColumn, updatedValue, selectedEntry) {
    
    var queryLine = "";
    
    // Updating an employee role specifically requires multiple value changes, requiring a more 
    // specific query statement. The other possible updates only require one value to be changed.
    if(tableName === "role") {
        queryLine = "UPDATE role SET title = " + updatedValue[0] + ", salary = " + updatedValue[1] + ", department_id = " + updatedValue[2] + " WHERE id = " + selectedEntry;
    }
    else {
        queryLine = "UPDATE " + tableName + " SET " + updatedColumn + " = " + updatedValue + " WHERE id = " + selectedEntry;
    }

    console.log("queryLine = ", queryLine);
    connection.query(queryLine, function (err, res) {
        if (err) throw err;
        
        console.log("Entry Updated!");

        selectOptions();
    })
};

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
    exitProgram: exitProgram,


    

};