// start with a function, that has a drop choice that asks what is their raole
const fs = require("fs")
const inquirer = require("inquirer");
const empcardGenerator = require('./dist/EmployeeGenerator')



function employeeInfo(employeeData){


if(!employeeData){
  employeeData = {}
}

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (inputName) => {
        if(inputName){
        return true;
      } else {
        console.log("Please enter the employee's name")
        return false
      }
    },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?",
        validate: (inputId) => {
        if(inputId){
        return true;
      } else {
        console.log("Please enter the employee's ID.")
        return false
      }
    },

      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        validate: (inputEmail) => {
        if(inputEmail){
        return true;
      } else {
        console.log("Please enter the employee's Email.")
        return false
      }
    },
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
      validate: (number) => {
        if (number) {
          return true;
        } else {
          console.log("Please enter an office number");
          return false;
        }
      },
    },
  ]);
    addAnother()
}

function infoEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is their Github URL?",
      message: "What school do they Attend?",
      validate: (githubUrl) => {
        if (githubUrl) {
          return true;
        } else {
          console.log("Please enter a valid Guthub URL.");
          return false;
        }
      },
    },
  ]);
}

function infoIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "What school do they Attend?",
      validate: (schoolName) => {
        if(schoolName){
        return true;
        addAnother();
      } else {
        console.log("Please enter the school name.")
        return false
      }
    }
   },
  
  ]);

}

function addAnother(){
   return inquirer.prompt([
     {
       type: "confirm",
       name: "plusOne",
       message: "Would you like to add another employee to your list?",
       default: true
     }]).then(choice => {
         if(choice.plusOne){
         employeeInfo()
         } else {
             console.log('Your list has generated')
             return employee
         }
     }); 
}




employeeInfo()
       .then((employeeData) => {
         console.log(employeeData)
         const empCards = empcardGenerator(employeeData);

     fs.writeFile('./index.html', empCards, err => {
        if(err) throw new Error(err);
        console.log('Employee Cards Generated')
     });
  })
