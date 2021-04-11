
const Intern = require('../lib/Intern')

test("to see if the three inputs are valid", () => {
  const intern = new Intern('Kylar', 90, 'tiktokaddict@gamil.com', 'GCC');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
    expect(intern.special).toEqual(expect.any(String))
});