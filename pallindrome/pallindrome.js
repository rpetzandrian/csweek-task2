const pallindromRecursive = (sentence, length, i = 0) => {
  if (i < length) {
    if (sentence[i] !== sentence[sentence.length - 1 - i]) {
      return false
    } else {
      return pallindromRecursive(sentence, length, i + 1)
    }
  } else {
    return true
  }
}

module.exports = pallindrome = (sentence) => {
  let data = sentence.replace(/\s/g, "").toLowerCase()
  let length = Math.floor(data.length / 2)
  return pallindromRecursive(data, length)
}