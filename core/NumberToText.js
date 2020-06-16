
const {getNumberOrThrow, groupNumberIntoArray} = require('./utils')
const {Numbers} = require('./NumberData')

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
  const numberString = number.toString();

  // Handle cases
  if (number >= 0 && number < 20) {
    return Numbers.ones[number];

  } else if (number >= 20 && number < 100) {
    const [tensDigit, unitDigit] = numberString.split('');

    const tens = Numbers.tens[tensDigit];

    if (unitDigit === '0') return tens;

    return `${tens}-${NumberToText(unitDigit)}`;
    
  } else if (number >= 100 && number < 1000)  {
    
    const [hundredsDigit, tensDigit, unitDigit] = numberString.split('');
    
    const tens = Numbers.ones[hundredsDigit];

    if (tensDigit === '0' && unitDigit === '0') return `${tens} hundred`;

    return tens + ' hundred and ' + NumberToText(`${tensDigit}${unitDigit}`);
 
  } else {
    // Group numbers into groups of three digits starting from the right
    const groupedNumbers = groupNumberIntoArray(numberString);

    const output = groupedNumbers.map((number, index, array) => {
      const scale = Numbers.scales[array.slice(index + 1).flat().join('').length];

      return `${NumberToText(number[0])}${scale ? ` ${scale}` : ``}`;
    });

    // String formatting to display with correct separators
    return [
      output.slice(0, -1).join(', '), 
      output.slice(-1)[0]
    ].join(output.slice(-1)[0].includes(' and ') ? ', ' : ' and ');
  }
  
  return input;
}

module.exports = {
  NumberToText
}