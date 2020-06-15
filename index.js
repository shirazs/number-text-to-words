
const {getNumberOrThrow} = require('./core/utils')
const {numbers} = require('./core/index')

function NumberToText(input) {
  
  if (typeof input !== 'string') {
    const argType = typeof input;

    switch (argType) {
      case 'undefined':
        throw new TypeError('Missing string argument');
        
      case 'number':
        throw new TypeError('Input must be a string');

      default:
        break;
    }
  }

  const number = getNumberOrThrow(input);

  // Handle basic case
  if (number >= 0 && number < 20)
    return numbers.ones[number];

  return input;
}

module.exports = {
  NumberToText
}