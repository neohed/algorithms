const shortestStringLength = (...args) => args.reduce((shortest, str) => Math.min(shortest, str.length), Number.MAX_SAFE_INTEGER);

module.exports = {
  shortestStringLength
}
