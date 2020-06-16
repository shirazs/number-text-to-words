
const re = /\D?\d+\D?/g;

/**
 * Returns the number in string as a word
 * @param {string} input 
 * @returns {string}
 */
function getNumberOrThrow(input) {
  const numberText = input.match(re);

  if (numberText === null || !numberText.length) throw new Error('Input string does not contain a number');
  
  const number = Number(numberText.join(''));

  if (isNaN(number)) throw new Error('Invalid number');
  
  return number;
}

/**
 * Chunk number string into 3 digit groups representation of decimal places
 * @param {string} input 
 * @return {Array<string>} Array of numbers in groups of three
 */
function groupNumberIntoArray(input) {

  if (input.length < 3) return input;

  let chunk = [];
  
  const output = [...input].reduceRight((accumulator, currentValue, index) => {
    
    if (chunk.length < 3) {
    	chunk.unshift(currentValue)
    } else {
      accumulator.unshift([chunk.join('')])
      chunk = new Array(currentValue);
    }

    if (index === 0 && chunk.length) { // Check on final iteration if chunk is not empty and add to accumulator
      accumulator.unshift([chunk.join('')]);
    }
    
    return accumulator;

  }, []);

  return output;
}


module.exports = {
  getNumberOrThrow,
  groupNumberIntoArray
}