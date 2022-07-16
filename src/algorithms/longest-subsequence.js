const {make2DArray} = require("../util/arrays");
const {shortestStringLength} = require('../util/strings');

function longestSubsequence(word1, word2) {
  const size = shortestStringLength(word1, word2);
  const grid = make2DArray(size, size);
  const getPrevCell = (row, col) => {
    if (row < 0 || col < 0) {
      return 0
    }

    return grid[row][col]
  }

  let max = {
    n: -1,
    from: Number.MAX_SAFE_INTEGER,
    to: -1
  }
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (word1.charAt(col) === word2.charAt(row)) {
        const n = 1 + getPrevCell(row - 1, col - 1);
        grid[row][col] = n;

        if (row === col && n > max.n) {
          max = {
            n,
            from: Math.min(max.from, row),
            to: Math.max(max.to, row)
          }
        }
      } else {
        grid[row][col] = Math.max(getPrevCell(row - 1, col), getPrevCell(row, col - 1))
      }
    }
  }

  const {from, to} = max;
  let res = '', prev = 0;
  for (let i = from; i <= to; i++) {
    const n = grid[i][i];
    if (n !== prev) {
      prev = n;
      res += word1.charAt(i)
    } else {
      res += ' '
    }
  }
  return res.trim()
}

module.exports = longestSubsequence
