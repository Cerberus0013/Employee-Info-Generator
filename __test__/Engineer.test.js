

test("to see if the three inputs are valid", () => {
  const employee = new Employee(name, id, email, github);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String))
});