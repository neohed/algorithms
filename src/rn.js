const RomanNumerals = require('./algorithms/roman-numerals');

console.log(RomanNumerals.toRoman(1) === 'I');
console.log(RomanNumerals.toInteger('I') === 1);

console.log(RomanNumerals.toRoman(1) === 'I');
console.log(RomanNumerals.toRoman(2000) === 'MM');
console.log(RomanNumerals.toRoman(1904) === 'MCMIV');

console.log(RomanNumerals.toInteger('I') === 1);
console.log(RomanNumerals.toInteger('MM') === 2000);
console.log(RomanNumerals.toInteger('MCMIV') === 1904);
