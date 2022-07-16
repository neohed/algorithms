const longestSubsequence = require('./algorithms/longest-subsequence')
const {same_length_words_2} = require('./_data/data-words');

same_length_words_2.forEach(({
                             word1,
                             word2
                           }) => {
  console.log(`"${word1}"\t"${word2}"\t substring: "${longestSubsequence(word1, word2)}"`)
})
