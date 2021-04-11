const Employee = require("../lib/Employee")



test('to see if the three inputs are valid', () => {
    const employee = new Employee(name, id, email);


  expect(employee.name).toBe(String);
  expect(employee.id).toBe(String);
  expect(employee.email).toBe(String);

})