const makeArray = valueOrArray => Array.isArray(valueOrArray) ? valueOrArray : [valueOrArray];
const make2DArray = (rows, cols, defaultValue = null) => Array(rows).fill(null).map(() => Array(cols).fill(defaultValue));

module.exports = {
  makeArray,
  make2DArray,
}
