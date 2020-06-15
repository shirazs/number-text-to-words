

// One numbers - n >= 0 && n < 20
const ones = [
  "Zero", 
  "One", 
  "Two", 
  "Three", 
  "Four", 
  "Five", 
  "Six", 
  "Seven", 
  "Eight", 
  "Nine",
  "Ten", 
  "Eleven", 
  "Twelve", 
  "Thirteen", 
  "Fourteen", 
  "Fifteen", 
  "Sixteen", 
  "Seventeen",
  "Eighteen", 
  "Nineteen"
];

// Tens number names - n > 19 && n < 99 
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

// Scale number names 
const scales = ["", "", "", "Hundred", "Thousand", "Million", "Billion"];

module.exports = {
  numbers: {
    ones,
    tens,
    scales
  }
}