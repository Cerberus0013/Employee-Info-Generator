// start with a function, that has a drop choice that asks what is their raole
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const create = require('./src/EmployeeGenerator')

const employee = []
//const engineer =require('')

function typeOfEmployee (){ 
 return  inquirer.prompt ([ 
  {      
      type: "list",
      name: "role",
      message: "What is the employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]) //then lead to a function that asks specific questions
    .then((choice) => {
if (choice.role === "Manager") {
     infoManager();
      
  } else if (choice.role === "Engineer") {
      infoEngineer();
 
   } else { 
      infoIntern();
        
    }
  })

}

 function infoManager() {
      return inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: (inputName) => {
              if (inputName) {
                return true;
              } else {
                console.log("Please enter the employee's name");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?",
            validate: (inputId) => {
              if (inputId) {
                return true;
              } else {
                console.log("Please enter the employee's ID.");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: (inputEmail) => {
              if (inputEmail) {
                return true;
              } else {
                console.log("Please enter the employee's Email.");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?",
          },
        ])
        .then((answer) => {
          employee.push(
            new Manager(
              answer.name,
              answer.id,
              answer.email,
              answer.officeNumber
            )
          );
          addAnother();
        }); //.then(managerData =>  );
   }


   function infoEngineer() {
     return inquirer
       .prompt([
         {
           type: "input",
           name: "name",
           message: "What is the employee's name?",
           validate: (inputName) => {
             if (inputName) {
               return true;
             } else {
               console.log("Please enter the employee's name");
               return false;
             }
           },
         },
         {
           type: "input",
           name: "id",
           message: "What is the employee's ID number?",
           validate: (inputId) => {
             if (inputId) {
               return true;
             } else {
               console.log("Please enter the employee's ID.");
               return false;
             }
           },
         },
         {
           type: "input",
           name: "email",
           message: "What is the employee's email?",
           validate: (inputEmail) => {
             if (inputEmail) {
               return true;
             } else {
               console.log("Please enter the employee's Email.");
               return false;
             }
           },
         },
         {
     type: "input",
     name: "github",
      message: "What is their Github URL?",
       message: "What is your Github URL?",
       validate: (githubUrl) => {
         if (githubUrl) {
           return true;
         } else {
           console.log("Please enter a valid Guthub URL.");
           return false;
         }
       },
  },   
       ])
       .then((answer) => {
         employee.push(
           new Engineer(
             answer.name,
             answer.id,
             answer.email,
             answer.github
           )
         );
         addAnother();
       }); //.then(managerData =>  );
   }


function infoIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (inputName) => {
          if (inputName) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?",
        validate: (inputId) => {
          if (inputId) {
            return true;
          } else {
            console.log("Please enter the employee's ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        validate: (inputEmail) => {
          if (inputEmail) {
            return true;
          } else {
            console.log("Please enter the employee's Email.");
            return false;
          }
        },
      },
      {
      type: "input",
        name: "school",
         message: "What school do they attend?",
         validate: (schoolName) => {
           if (schoolName) {
              return true;
           } else {
            console.log("Please enter the school name.");
              return false;
           }
        },
       },
    ])
    .then((answer) => {
      employee.push(
        new Intern(answer.name, answer.id, answer.email, answer.school)
      );
      addAnother();
    }); //.then(managerData =>  );
}



   const addAnother = () => {
     inquirer
       .prompt([
         {
           type: "confirm",
           name: "addEmployee",
           message: "Would you like to enter another Employee?",
           default: false,
         },
       ])
       .then((addEmployee) => {
         if (!addEmployee) {
           typeOfEmployee()
         } else {
            const data = create(employee)
            
            
            console.log(employee)
            
           fs.writeFile("./index.html", data, (err) => {
             if (err) {
               return;
             } else {
               console.log("Employee Document Generated");
             }
            })
         }
       });
   };

//console.log(generalEmployee)

typeOfEmployee()
  //  .then(employeeType)
  //  .then((employeeTypeData) => {
  //    console.log(employeeTypeData)
  //    console.log(generalEmployeeData)
  //   })"
    
    
   