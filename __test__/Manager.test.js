


test("to see if the three inputs are valid", () => {
  const employee = new Employee(name, id, email, officeNumber);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.officeNumber).toEqual(expect.any(Number))
});