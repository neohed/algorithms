const {romanNumerals} = require('./algorithms/roman-numerals');

console.log(romanNumerals.romanise(1) === 'I');
console.log(romanNumerals.deromanise('I') === 1);

console.log(romanNumerals.romanise(1));
console.log(romanNumerals.romanise(2000));
console.log(romanNumerals.romanise(1904));

console.log(romanNumerals.deromanise('I'));
console.log(romanNumerals.deromanise('MM'));
console.log(romanNumerals.deromanise('MCMIV'));
