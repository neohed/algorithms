const {getNRandomNumbers} = require('./util/random')
const quickSort = require('./search/quick-sort')

const data = getNRandomNumbers(20);

console.log(quickSort(data))
