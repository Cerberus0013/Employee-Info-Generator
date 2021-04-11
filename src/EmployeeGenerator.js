



module.exports = data =>{

console.log(data)

for ( let i =0; i < data.length; i++){

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees5</title>
</head>
<body>
    <section>
        <h1>${data[i].name}</h1>
        <p>${data[i].id}</p>
        <p>${data[i].email}</p>
        <p> ${data[i].special}</p>
    </section>

    <section>
        <h1>${data[1].name}</h1>
        <p>${data[1].id}</p>
        <p>${data[1].email}</p>
        <p> ${data[1].special}</p>
    </section>
    
</body>
</html>
`;

}
}


