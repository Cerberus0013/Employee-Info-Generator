



function generateEmpCards(data){
return `
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
</head>
<body>
    <section>
        <h1>${data.name}</h1>
        <p>${data.id}</p>
        <p>${data.email}</p>
        <p>${data.role}</p>
        <p> ${data.officeNumber}</p>
    </section>
    
</body>
</html>
`

}

module.exports = generateEmpCards