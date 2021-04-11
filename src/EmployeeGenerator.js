






const employeeGenerator = data => {

console.log(data);

for (let i = 0; i < data.length; i++)

return `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="./src/EmployeeGenerator.js"> 
    <title>Employees</title>
</head>
<body>

<header> </header>

<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title"${data[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Employee ID: ${data[i].id}</h6>
    <a href='mailto:${data[i].email}'>Email: ${data[i].email}<a>
     <p> Special ${data[i].special}</p>
  </div>
</div>

    
 </body>  
</html>
`;

}


module.exports = employeeGenerator;
