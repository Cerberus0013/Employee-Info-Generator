// start with a function, that has a drop choice that asks what is their raole
const fs = require("fs")
const inquirer = require("inquirer");
const empCardGenerator = require('./src/EmployeeGenerator')
//const engineer =require('')


const generalEmployee = () => {
  return inquirer.prompt([
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
   
  ]);
};


const employeeType = (generalEmployeeData) => {

  if (!generalEmployeeData.position) {
    generalEmployeeData.position = [];
  }

  return inquirer
    .prompt([

    {
         type: "input",
         name: "officeNumber",
         message: "What is the Manager's office number?",
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
     {
       type: "input",
       name: "school",
       message: "What school do they Attend?",
       validate: (schoolName) => {
         if (schoolName) {
           return true;
          } else {
            console.log("Please enter the school name.");
            return false;
          }
        },
      },

      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to enter another Employee?',
        default: false
      
      },
  ])
  .then ((employeeTypeData) =>{ 
    generalEmployeeData.position.push(employeeTypeData);
    if(employeeTypeData.addEmployee) {
     generalEmployee(generalEmployeeData)
    }else {
      return generalEmployeeData
    }
    
  });

}


generalEmployee()
.then(employeeType)
.then((employeeTypeData) => {
  console.log(employeeTypeData)
  console.log(generalEmployeeData)
})
  
  
  
  
//   console.log(employeeData);
//   const employeeCard = empCardGenerator(employeeData);
  
//   fs.writeFile("./index.html", employeeCard, (err) => {
//     if (err) throw new Error(err);
//     console.log("Employee Document Generated");
//   });
// });

//   .then((choice) => {
// if (choice.role === "Manager") {
//       infoManager();
      
//    } else if (choice.role === "Engineer") {
//       infoEngineer();
 
//    } else { 
//       infoIntern();
        
//     }
//   });
//  }

 //console.log(employeeInfo())

    // function infoManager() {
    //   return inquirer.prompt([
    //     {
    //       type: "input",
    //       name: "officeNumber",
    //       message: "What is the Manager's office number?",
    //     },
    //   ]).then(answer => {
    //     employeeData.push(answer.name, answer.id, answer.email, answer.officeNumber)
    //     console.log(answer)
    //     this.addAnother();
    //   });; //.then(managerData =>  );
    // }
    
    
    // function infoEngineer() {
    //   return inquirer.prompt([
    //     {
    //       type: "input",
    //       name: "github",
    //       message: "What is their Github URL?",
    //       message: "What is your Github URL?",
    //       validate: (githubUrl) => {
    //         if (githubUrl) {
    //           return true;
    //         } else {
    //           console.log("Please enter a valid Guthub URL.");
    //           return false;
    //         }
    //       },
    //     },
    //   ]).then(answer => {
    //     employeeData.map(infoEngineer (answer.employeeData, answer.github))
    //     console.log(answer)
    //     this.addAnother();
    //   });;
    // }
    
    // function infoIntern() {
    //   return inquirer.prompt([
    //     {
    //       type: "input",
    //       name: "school",
    //       message: "What school do they Attend?",
    //       validate: (schoolName) => {
    //         if (schoolName) {
    //           return true;
    //         } else {
    //           console.log("Please enter the school name.");
    //           return false;
    //         }
    //       },
    //     },
    //   ]) .then(answer => {
    //     employeeData.map(infoIntern (answer.employeeData, answer.school))
    //     console.log(answer)
    //     this.addAnother();
    //   });
    // }
    
    // function addAnother() {
    //   return inquirer
    //     .prompt([
    //       {
    //         type: "confirm",
    //         name: "plusOne",
    //         message: "Would you like to add another employee to your list?",
    //         default: true,
    //       },
    //     ])
    //     .then((choice) => {
    //       if (choice.plusOne) {
    //         employeeInfo();
    //       } else {
    //         console.log("Your list has generated");
    //       }
    //     });
    // }
    
    




