const {make2DArray} = require("../util/arrays");
const {shortestStringLength} = require('../util/strings');

function longestSubsequence(word1, word2) {
  const size = shortestStringLength(word1, word2);
  const grid = make2DArray(size, size);
  const getTopLeftValue = (row, col) => {
    if (row - 1 < 0 || col - 1 < 0) {
      return 0
    }

    return grid[row - 1][col - 1]
  }

  /*
  let max = {
    n: -1
  }
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
  }

  const {n, row} = max;
  return word1.substring(row - n + 1, row + 1)
   */
}

module.exports = longestSubsequence
