// start with a function, that has a drop choice that asks what is their raole

const inquirer = require("inquirer");



function employeeInfo() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },

      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((choice) => {
      if (choice.role === "Manager") {
        infoManager();
      } else if (choice.role === "Engineer") {
        infoEngineer();
      } else { 
          infoIntern();
      }
    });
}

function infoManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Manager's office number?",
    },
  ]);
}

function infoEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is their Github URL?",
    },
  ]);
}

function infoIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "What school do they Attend?",
    },
  ]);
}

employeeInfo()

