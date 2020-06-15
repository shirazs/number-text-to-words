
const re = /\D?\d+\D?/g;

function getNumberOrThrow(input) {
  const numberText = input.match(re);

  if (numberText === null || !numberText.length) throw 'Input string does not contain a number';
  
  const number = Number(numberText.join(''));

  if (isNaN(number)) throw 'Invalid number';
  
  return number;
}

module.exports = {
  getNumberOrThrow
}