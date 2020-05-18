var inquirer = require("inquirer");


selectOptions = function() {
    return inquirer.prompt({
        type: "choice",
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
    newEmployee: newEmployee
}