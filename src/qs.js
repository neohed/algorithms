const {getNRandomNumbers} = require('./util/random')
const quickSort = require('./algorithms/quick-sort')

const data = getNRandomNumbers(30, 0, 1000);

console.log(quickSort(data))
