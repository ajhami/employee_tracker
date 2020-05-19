// var connection = require("./public/js/connect_sql");
// var accessSQL = require("./public/js/use_sql");
const ask = require("./public/js/inquirer_prompts");

//async function init() {
    console.log(`
    ______________________________________________________
    | _____                                              |
    | |                                                  |
    | |__             ____  |  ____        ___  ___      |
    | |      /\\  /\\  |    | | |    | \\  / |___||___|     |
    | |____ /  \\/  \\ |____| | |____|  \\/  |___ |___      |
    | ____________   |                /                  |
    |      |         |               /                   |
    |      |                                             |
    |      | |___  ____    ____ |_  ____   |___          |
    |      | |   \\ |   |  |     |_> |___|  |   \\         |
    |      | |     |___|_ |____ |\\  |___   |             |
    |____________________________________________________|
    
    `)


    // console.log("TESTING NEW EMPLOYEE PROMPTS");
    // var newEmployee = await ask.newEmployee();
    // console.log(newEmployee);
    
    // accessSQL.testFunction("hello");
    // accessSQL.printTable();
    
    ask.selectOptions();
    
    // var testDepartments = getSavedChoices("department_name", "department");
    // var testRoles = getSavedChoices("title", "role");

    // console.log(testDepartments);
    // console.log(testRoles);



    // HOW FUNCTION SHOULD WORK!
    // use inquirer function to see what user wants to do,
    // use series of else ifs to filter to the proper prompt function
    // promise uses then to invoke query function, query then recursively
    // calls the init function to start over questioning
    // If user selects exit, program will end

    // Look up iife


//}

// init();
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

