const subsequence = require('./longestSubsequence')

let arr = [35, 27, 13, 3, 12, 25, 45]
let arr2 = [4, 6, 5, 1, 8]
const subseq = new subsequence()
console.log(subseq.longestIncrease(arr))
console.log(subseq.longestIncrease(arr2))