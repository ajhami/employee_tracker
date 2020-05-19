var accessSQL= require("./use_sql");
var inquirer = require("inquirer");

selectOptions = function() {
    inquirer.prompt({
        type: "rawlist",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View All Employees", 
            "View Employees by Department",
            "View Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Managers",
            "Add Manager",
            "Remove Manager",
            "Exit Program"
        ]
    }).then(function(selection) {
        switch (selection.action) {
            case "View All Employees":
                accessSQL.printTable();
                break;
      
            case "View Employees by Department":
              accessSQL.testFunction(selection.action);
              break;
      
            case "View Employees by Manager":
                accessSQL.testFunction(selection.action);
                break;
      
            case "Add Employee":
                accessSQL.testFunction(selection.action);
                break;

            case "Remove Employee":
                accessSQL.testFunction(selection.action);
                break;
            
            case "Update Employee Role":
                accessSQL.testFunction(selection.action);
                break;

            case "Update Employee Manager":
                accessSQL.testFunction(selection.action);
                break;
        
            case "View All Roles":
                accessSQL.testFunction(selection.action);
                break;

            case "Add Role":
                accessSQL.testFunction(selection.action);
                break;

            case "Remove Role":
                accessSQL.testFunction(selection.action);
                break;

            case "View All Managers":
                accessSQL.testFunction(selection.action);
                break;

            case "Add Manager":
                accessSQL.testFunction(selection.action);
                break;

            case "Remove Manager":
                accessSQL.testFunction(selection.action);
                break;

            case "Exit Program":
                accessSQL.exitProgram();
                break;
        }
    });
}

newEmployee = function() {

    // WRITE QUERY FUNCTION IN HERE TO GRAB LIST OF STORED DEPARTMENTS AND ROLES
    
    return inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter employee's first name: "
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter employee's last name: "
        },
        {
            type: "choice",
            name: "department",
            message: "Select the employee's department: ",
            choices: [1, 2, 3] // placeholder for queried departments
        },
        {
            type: "choice",
            name: "role",
            message: "Select the employee's role: ",
            choices: [1, 2, 3] // placeholder for queried roles
        }    
    ])
};







module.exports = {
    selectOptions: selectOptions,
    newEmployee: newEmployee
}