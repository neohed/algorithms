class RomanNumerals {
  static SYMBOLS_MAP = [
    { n: 1000, d: 'M' },
    { n: 900, d: 'CM' },
    { n: 500, d: 'D' },
    { n: 400, d: 'CD' },
    { n: 100, d: 'C' },
    { n: 90, d: 'XC' },
    { n: 50, d: 'L' },
    { n: 40, d: 'XL' },
    { n: 10, d: 'X' },
    { n: 9, d: 'IX' },
    { n: 5, d: 'V' },
    { n: 4, d: 'IV' },
    { n: 1, d: 'I' }
  ];

  static toInteger(numerals) {
    let number = 0;
    let i = 0;

    while (i < numerals.length) {
      for (const symbolMap of RomanNumerals.SYMBOLS_MAP) {
        if (numerals.startsWith(symbolMap.d, i)) {
          number += symbolMap.n;
          i += symbolMap.d.length;
          break
        }
      }
    }

    return number
  }

  static toRoman(number) {
    const numerals = [];
    let i = 0;
    let symbol;

    while (number > 0) {
      symbol = RomanNumerals.SYMBOLS_MAP[i];

      if (symbol.n <= number) {
        numerals.push(symbol.d);
        number -= symbol.n
      } else {
        ++i
      }
    }

    return numerals.join('')
  }
}

module.exports = RomanNumerals;
