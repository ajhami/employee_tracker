var accessSQL= require("./use_sql");
var inquirer = require("inquirer");

selectOptions = function() {
    inquirer.prompt({
        type: "rawlist",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View All Employees", 
            // "View Employees by Department",
            // "View Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Add Department",
            "Remove Department",
            // "View All Managers",
            // "Add Manager",
            // "Remove Manager",
            "Exit Program"
        ]
    }).then(function(selection) {
        switch (selection.action) {
            case "View All Employees":
                accessSQL.printTable("employee");
                break;
      
            // case "View Employees by Department":
            //   accessSQL.testFunction(selection.action);
            //   break;
      
            // case "View Employees by Manager":
            //     accessSQL.testFunction(selection.action);
            //     break;
      
            case "Add Employee":
                addNewEmployee();
                break;

            case "Remove Employee":
                selectEntryToDelete("employee");
                break;
            
            case "Update Employee Role":
                accessSQL.testFunction(selection.action);
                break;

            case "Update Employee Manager":
                accessSQL.testFunction(selection.action);
                break;
        
            case "View All Roles":
                accessSQL.printTable("role");
                break;

            case "Add Role":
                addNewRole();
                break;

            case "Remove Role":
                selectEntryToDelete("role");
                break;

            case "View All Departments":
                accessSQL.printTable("department");
                break;

            case "Add Department":
                addNewDepartment();
                break;

            case "Remove Department":
                selectEntryToDelete("department");
                break;

            // case "View All Managers":
            //     accessSQL.testFunction(selection.action);
            //     break;

            // case "Add Manager":
            //     accessSQL.testFunction(selection.action);
            //     break;

            // case "Remove Manager":
            //     accessSQL.testFunction(selection.action);
            //     break;

            case "Exit Program":
                accessSQL.exitProgram();
                break;
        }
    });
}


addNewEmployee = function() {

    // WRITE QUERY FUNCTION IN HERE TO GRAB LIST OF STORED DEPARTMENTS AND ROLES
    
    inquirer.prompt([
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
            type: "list",
            name: "roleID",
            message: "Select the employee's role ID: ",
            choices: [1, 2, 3] // placeholder for queried departments
        },
        {
            type: "list",
            name: "managerID",
            message: "Select the employee's manager ID: ",
            choices: [1, 2, 3] // placeholder for queried roles
        }    
    ]).then(function(newEmployee) {
        return saveNewEntry("employee", [JSON.stringify(newEmployee.firstName), JSON.stringify(newEmployee.lastName), newEmployee.roleID, newEmployee.managerID]);
    })
};


addNewDepartment = function() {
    inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter the name of the new department: "
    }).then(function(newDeparment){
        return saveNewEntry("department", JSON.stringify(newDeparment.name));
    })
};


addNewRole = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title for the new role: "
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the set salary: "
        },
        {
            type: "input",
            name: "departmentID",
            message: "Enter the department ID: "
        }
    ]).then(function(newRole){
        return saveNewEntry("role", [JSON.stringify(newRole.title), JSON.stringify(newRole.salary), newRole.departmentID]);
    })
};

selectEntryToDelete = function(type) {
    inquirer.prompt({
        type: "input",
        name: "id",
        message: `Enter the ID of the ${type} you'd like to delete: `
    }).then(function(entrySelected){
        return deleteEntry(type, entrySelected.id);
    })
};




module.exports = {
    selectOptions: selectOptions,
    addNewEmployee: addNewEmployee
}