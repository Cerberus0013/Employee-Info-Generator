const Employee = require("../lib/Employee")



test('to see if the three inputs are valid', () => {
    const employee = new Employee('harry', 6, 'harry@gmail.com');


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})