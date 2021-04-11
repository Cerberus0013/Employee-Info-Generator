;
const Manager = require("../lib/Manager")

test("to see if the three inputs are valid", () => {
  const manager = new Manager('Stan', 6, 'Stantheman@gamil.com', 'A-59');

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String))
});