const Employee = require("../lib/Employee")



test('to see if the three inputs are valid', () => {
    const employee = new Employee(name, id, email);


  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));

})