const randomInRange = (from, to) => Math.random() * (to - from) + from

function getNRandomNumbers(n, from = 0, to = 10) {
  return Array(n).fill(null).map(() => Math.floor(randomInRange(from, to)))
}

module.exports = {
  randomInRange,
  getNRandomNumbers,
}
