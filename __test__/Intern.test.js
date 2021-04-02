
const intern = require('../lib/Intern')

test("to see if the three inputs are valid", () => {
  const intern = new Intern(name, id, email, school);

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String))
});