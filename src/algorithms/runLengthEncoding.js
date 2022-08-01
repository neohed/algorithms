const isInValidString = s => s === null || s === undefined || typeof s !== 'string' || s.length === 0;
const isNumericChar = c => c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;

// O(n)
function encode(input) {
  if (isInValidString(input)) {
    return ''
  }

  let result = '';
  let previousChar = input[0];
  let counter = 1;

  for (let i = 1; i < input.length; i++) {
    const currentChar = input[i];

    if (currentChar === previousChar) {
      counter++
    } else {
      result += counter + previousChar;
      counter = 1;
      previousChar = currentChar
    }
  }

  return result + counter + previousChar
}

// O((10 ^ (n - 1)) - 1)
function decode(input) {
  if (isInValidString(input)) {
    return ''
  }

  let result = '';
  let countChars = '';

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    if (isNumericChar(currentChar)) {
      countChars += currentChar
    } else {
      const count = parseInt(countChars);
      result += currentChar.repeat(count);
      countChars = ''
    }
  }

  return result
}

module.exports = {
  encode,
  decode,
}
