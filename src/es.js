const {encode, decode} = require('./algorithms/runLengthEncoding')

const res1 = encode('aaabccddddefgggggg')
const res2 = encode('aaabccddddefggggggh')

console.log(`${decode(res1)} = ${res1}`)
console.log(`${decode(res2)} = ${res2}`)
