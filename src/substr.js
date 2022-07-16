const longestSubstring = require('./algorithms/longest-substring')
const {same_length_words} = require('./_data/data-words');

same_length_words.forEach(({
                             word1,
                             word2
                           }) => {
  console.log(`"${word1}"\t"${word2}"\t substring: "${longestSubstring(word1, word2)}"`)
})
