
const engineer = require('../lib/Engineer')


test("to see if the three inputs are valid", () => {
  const engineer = new Engineer(name, id, email, github);

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String))
});