// ===============================================================================
// INDEX.JS
// ===============================================================================


// The following require clause connects to all stored
// functions in inquirer_prompts.js and use_sql.js and
// connects to the mySQL database in connect_sql.js
const ask = require("./public/js/inquirer_prompts");

// 
console.log('\033[36m', "Welcome to...");
console.log('\033[35m', `
    ______________________________________________________
    | _____                                              |
    | |                                                  |
    | |__             ____  |  ____        ___  ___      |
    | |      /\\  /\\  |    | | |    | \\  / |___||___|     |
    | |____ /  \\/  \\ |____| | |____|  \\/  |___ |___      |
    | ____________   |                /                  |
    |      |         |               /                   |
    |      |                                             |
    |      | |___  ____    ____ |__  ____   |___         |
    |      | |   \\ |   |  |     |__> |___|  |   \\        |
    |      | |     |___|_ |____ | \\_ |___   |            |
    |____________________________________________________|
    
`)

console.log('\033[36m', `
        This application has been designed to manage
    information on your company organization and personel.
    Please note when wanting to update information on 
    employees, departments, roles, or managers, make sure
    to keep track of ID numbers. These IDs can be viewed
    under any of the "view" options.

`);

// Calling the main inquirer function from inquirer_prompts.js; this
//  function loops through all functions used to run this application.
ask.selectOptions();
    