const console_table = require('console.table')
const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',  
    port: 3306,
    user: 'root',
    password: '',
    database: 'departments_db',
  });
  connection.connect( (err) => {
      if (err) throw err;
      userPrompt();
  });
  const userPrompt = () => {
      inquirer.prompt({
          name: 'action',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
              'look at a department',
              'look at manager',
              'look at employee',
              'add a department',
              'add a manager',
              'add an employee'
          ]
      }).then(function ({ task }) {
        switch (task) {
        case "look at a department":
            //function to view department
          break;
        case "look at manager":
            //function to view manager
          break;
        case "look at employee":
            //function to view employee
           break;
        case "add a department":
            //function to add department
           break;     
        case "add a manager":
            //function to add manager
           break;
        case "add a employee":
            //function to add employee
           break;                                 
        }
    });
}