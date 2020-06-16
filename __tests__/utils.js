const {getNumberOrThrow, groupNumberIntoArray} = require('../core/utils');

describe('Handles invalid or missing input', () => {
  
  it('should throw an exception if string argument has no number', () => {
    expect(() => getNumberOrThrow('I am just text.')).toThrowError('Input string does not contain a number');
  });
  
  it('should throw an exception if string argument is invalid', () => {
    expect(() => getNumberOrThrow('I received 23 456,9 KGs.')).toThrowError('Invalid number');
  });

});

describe('Handles grouping number into groups of three', () => {
  
  it('should handle number less than 3 digits', () => {
    expect(groupNumberIntoArray('10')).toBe('10');
  });

  it('should handle 3 or more digit numbers', () => {
    expect(groupNumberIntoArray('123')).toEqual(expect.arrayContaining([['123']]));

    expect(groupNumberIntoArray('1234')).toEqual(expect.arrayContaining([['1'], ['234']]));
    
    expect(groupNumberIntoArray('123456')).toEqual(expect.arrayContaining([['123'], ['456']]));
  });
});
