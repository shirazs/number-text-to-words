


function NumberToText(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
}

module.exports = {
  NumberToText
}