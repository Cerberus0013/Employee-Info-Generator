
const Manager = require("../lib/Manager")

test("to see if the three inputs are valid", () => {
  const manager = new Manager(name, id, email, officeNumber);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number))
});