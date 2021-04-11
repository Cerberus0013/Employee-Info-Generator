const employeeGenerator = (data) => {
  const managerGenerator = (manager) => {
    return `
  <div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title"> ${manager.getName()}</h3>
        <h4 class="card-title"><i class="fas fa-cogs mr-2"></i>Manager</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
  `;
  };

  
  const engineerGenerator = (engineer) => {
    return `
  <div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title"> ${engineer.getName()}</h3>
        <h4 class="card-title"><i class="fas fa-cogs mr-2"></i>Engineer</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item"> Github: ${engineer.getGithub()}</li>
        </ul>
    </div>
</div>
  `;
  
}
  const internGenerator = (intern) => {
    return `
  <div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title"> ${intern.getName()}</h3>
        <h4 class="card-title"><i class="fas fa-cogs mr-2"></i>Intern</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item"> School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
  `;
  };


  const html = [];

  html.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerGenerator(manager))
  );
  html
    .push(
      data
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => engineerGenerator(engineer))
        .join("")
    )

  html
    .push(
      data
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => internGenerator(intern))
        .join("")
    
    )

return html.join('')

}

module.exports = data => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
     <link rel="stylesheet" href="./src/style.css"> 
    <title>Employees</title>
</head>
<body>

<header> 
<h1 class="title" > Employess of Compnay Inc </h1>
</header>
<div class="container">
<div class= "row">
<div class="col-12 d-flex justify-content-center">
${employeeGenerator(data)}

      </div>
  </div>
</div>


    
 </body>  
</html>
`;
};

