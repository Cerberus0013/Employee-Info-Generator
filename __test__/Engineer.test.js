
const Engineer = require('../lib/Engineer')


test("to see if the three inputs are valid", () => {
  const engineer = new Engineer('peter', 96, 'peter@gamil.com', 'pertpanworkshop');

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String))
});