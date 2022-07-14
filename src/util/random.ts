const randomInRange = (from: number, to: number) => Math.random() * (to - from) + from;

function getNRandomNumbers(n: number, from = 0, to = 10): number[] {
  return Array(n).fill(randomInRange(from, to))
}

export {
  randomInRange,
  getNRandomNumbers,
}
