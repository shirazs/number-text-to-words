
// One numbers - n >= 0 && n < 20
const ones = [
  'zero', 
  'one', 
  'two', 
  'three', 
  'four', 
  'five', 
  'six', 
  'seven', 
  'eight', 
  'nine',
  'ten', 
  'eleven', 
  'twelve', 
  'thirteen', 
  'fourteen', 
  'fifteen', 
  'sixteen', 
  'seventeen',
  'eighteen', 
  'nineteen'
];

// Tens number names - n > 19 && n < 99 
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// Number Scale names - add more to this list to support even larger numbers
const scales = {
  3: 'thousand', 
  6: 'million', 
  9: 'billion',
  12: 'trillion',
  15: 'quadrillion',
  18: 'quintillion',
  21: 'sextillion'
};

module.exports = {
  Numbers: {
    ones,
    tens,
    scales
  }
};
