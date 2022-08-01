class RomanNumerals {
  static #SYMBOLS_MAP = [{
    n: 1000,
    d: 'M'
  }, {
    n: 900,
    d: 'CM'
  }, {
    n: 500,
    d: 'D'
  }, {
    n: 400,
    d: 'CD'
  }, {
    n: 100,
    d: 'C'
  }, {
    n: 90,
    d: 'XC'
  }, {
    n: 50,
    d: 'L'
  }, {
    n: 40,
    d: 'XL'
  }, {
    n: 10,
    d: 'X'
  }, {
    n: 9,
    d: 'IX'
  }, {
    n: 5,
    d: 'V'
  }, {
    n: 4,
    d: 'IV'
  }, {
    n: 1,
    d: 'I'
  }];
  static #STRING_ORDER = [1, 3, 5, 7, 9, 11, 0, 2, 4, 6, 8, 10, 12];

  deromanise(numerals) {
    let number = 0;
    let x = 0;
    let y = 0;

    while (x < numerals.length) {
      const symbolMap = RomanNumerals.#SYMBOLS_MAP[RomanNumerals.#STRING_ORDER[y]];
      const symbol = numerals.substring(x, x + symbolMap.d.length);

      if (symbolMap.d === symbol) {
        number += symbolMap.n;
        x += symbolMap.d.length;
        y = 0
      } else {
        ++y
      }
    }

    return number
  }

  romanise(number) {
    const numerals = [];
    let i = 0;
    let symbol;

    while (number > 0) {
      symbol = RomanNumerals.#SYMBOLS_MAP[i];

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

module.exports = {
  romanNumerals: new RomanNumerals
}
