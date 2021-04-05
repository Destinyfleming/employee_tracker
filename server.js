const inquirer = require("inquirer")
const mysql = require("mysql")
const consoletable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "department_db"
});

connection.connect(function(error) {
    if (error) throw error
    console.log("connected to db!")
    userPrompt();
});

//start prompting user
function userPrompt() {
    inquirer.prompt([{
    type: "list",
    message: "what action do you want to do?",
    name: "choice",
    choices: [
              "see every employee", 
              "look at employees by roles",
              "add a new employee",
              "add a new role",
              "add a new department"
            ]
}]).then(function(val) {
        switch (val.choice) {
            case "see every employee":
              seeEmployees();
            break;
    
          case "look at employees by roles":
              seeRoles();
            break;
  
          case "add a new employee":
                newEmployee();
              break;

            case "add a new role":
                newRole();
              break;
      
            case "add a new department":
                newDepartment();
              break;
    
            }
})};

//functions to view employees/employees by roles
function seeEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(error, response) {
      if (error) throw error
      console.table(response)
      userPrompt()
  })
}

function seeRoles() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS title FROM employee JOIN role ON employee.role_id = role.id;", 
  function(error, response) {
  if (error) throw error
  console.table(response)
  userPrompt()
  })
}

//adding functions employee/role/dep
function newEmployee() { 
    inquirer.prompt([
        {name: "firstname",
          type: "input",
          message: "enter employees first name "},
        {name: "lastname",
          type: "input",
          message: "enter employees last name "},
        {name: "role",
          type: "list",
          message: "enter their role ",
          choices: selectRole()
        }]).then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1
      connection.query("INSERT INTO employee SET ?", 
      {first_name: val.firstName,last_name: val.lastName,manager_id: 1, role_id: roleId}, 
      function(error){
          if (error) throw error
          console.table(val)
          userPrompt()
      })

})}

function newRole() { 
  connection.query("SELECT role.title AS title, role.salary AS money FROM role",   function() {
    inquirer.prompt([
        {name: "title",
          type: "input",
          message: "enter the title of the role"},
        {name: "money",
          type: "input",
          message: "enter the salary of the role"
        }]).then(function(response) {
        connection.query(
            "INSERT INTO role SET ?",
            {title: response.title, salary: response.money},
            function(error) {
                if (error) throw error
                console.table(response);
                userPrompt();
            })
    });
  });
}

function newDepartment() { 

    inquirer.prompt([
        { name: "name",
          type: "input",
          message: "enter the new departments name"
        }]).then(function(response) {
        connection.query(
            "INSERT INTO department SET ? ",
            {name: response.name},
            function(error) {
                if (error) throw error
                console.table(response);
                userPrompt();
            })
    })
}

var roles = [];
function selectRole() {
  connection.query("SELECT * FROM role", function(error, response) {
    if (error) throw error
    for (var i = 0; i < response.length; i++) {
      roles.push(response[i].title);
    }})
  return roles;
}