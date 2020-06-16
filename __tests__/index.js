const {NumberToText} = require('../index');

describe('Handles invalid or missing input', () => {
  it('should throw an exception if no argument passed', () => {
    expect(() => NumberToText()).toThrowError('Missing string argument');
  });
  
  it('should throw an exception if invalid argument passed', () => {
    expect(() => NumberToText(123)).toThrowError('Input must be a string');
  });
  
});


test('Handles basic case', () => {
  expect(NumberToText('0 tolerance')).toEqual('zero');
});

test('All cases', () => {
  expect(NumberToText('2 green bottles, siting on the wall')).toEqual('two');
  
  expect(NumberToText('On cloud 9')).toEqual('nine');
  
  expect(NumberToText('Hang 10')).toEqual('ten');
  
  expect(NumberToText('Bring me 20 eggs for breakfast')).toEqual('twenty');
  
  expect(NumberToText('Catch 22')).toEqual('twenty-two');
  
  expect(NumberToText('100 days of summer')).toEqual('one hundred');
  
  expect(NumberToText('101 dalmatians')).toEqual('one hundred and one');
  
});

test('UAT test cases', () => {

  expect(NumberToText('The pump is 536 deep underground.')).toEqual('five hundred and thirty-six');
  
  expect(NumberToText('We processed 9121 records.')).toEqual('nine thousand, one hundred and twenty-one');
  
  expect(NumberToText('Interactive and printable 10022 ZIP code.')).toEqual('ten thousand and twenty-two');
  
  expect(NumberToText('The database has 66723107008 records.')).toEqual('sixty-six billion, seven hundred and twenty-three million, one hundred and seven thousand and eight');
  
  expect(() => NumberToText('Variables reported as having a missing type #65678.')).toThrowError('Invalid number');

});
