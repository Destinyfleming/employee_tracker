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
      askQuestions();
  });
  const askQuestions = () => {
      inquirer.prompt({
          name: 'action',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
              'look at a department',
              'create a department'
          ]
      }).then( (answer) => {
          if (answer.action == 'look at a department') {
              connection.query("SELECT * FROM departments", (err, res) => {
                  if (err) throw err;
                  console.log(res);
              })
          }
      })
  }