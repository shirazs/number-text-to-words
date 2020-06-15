const {NumberToText} = require('../index');

  describe('Handles invalid or missing input', () => {
    it('should throw an exception if no argument passed', () => {
      expect(() => NumberToText()).toThrowError('Missing string argument');
    });
    
    it('should throw an exception if invalid argument passed', () => {
      expect(() => NumberToText(123)).toThrowError('Input must be a string');
    });
    
    it('should throw an exception if string argument has no number', () => {
      expect(() => NumberToText('I am just text.')).toThrowError('Input string does not contain a number');
    });
    
    it('should throw an exception if string argument is invalid', () => {
      expect(() => NumberToText('I received 23 456,9 KGs.')).toThrowError('Invalid number');
    });

  });


test('Handles basic case', () => {
  expect(NumberToText('0 tolerance')).toEqual('Zero');
});

test('All cases', () => {
  expect(NumberToText('2 green bottles, siting on the wall')).toEqual('Two');

  expect(NumberToText('On cloud 9')).toEqual('Nine');

  expect(NumberToText('Hang 10')).toEqual('Ten');

  expect(NumberToText('Where are my 19 socks?')).toEqual('Nineteen');

  expect(NumberToText('Catch 22')).toEqual('Nineteen');
});

// The pump is 536 deep underground. five hundred and thirty-six
// We processed 9121 records. nine thousand, one hundred and twenty-one
// Variables reported as having a
// missing type #65678.
// number invalid
// Interactive and printable 10022 ZIP
// code.
// ten thousand and twenty-two
// The database has 66723107008
// records.
// sixty-six billion, seven hundred and twenty-three million, one hundred and
// seven thousand and eight
// I received 23 456,9 KGs. number invalid