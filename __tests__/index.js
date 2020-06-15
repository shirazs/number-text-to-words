const {NumberToText} = require('../index');

test('Accepts string input only', () => {
  expect(NumberToText(123)).toThrow('Input must be a string');
});