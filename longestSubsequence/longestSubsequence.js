class subsequence {
  longestIncrease(arr) {
    const lisArr = Array(arr.length).fill(1)
    let arrList = []

    for (let i = 1; i <= arr.length - 1; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i] && lisArr[i] <= lisArr[j]) {
          lisArr[i] = lisArr[j] + 1;
        }
      }
    }

    for (let i = Math.max.apply(null, lisArr); i > 0; i--) {
      for (let j = arr.length - 1; j >= 0; j--) {
        if (lisArr[j] === i) {
          arrList.unshift(arr[j])
          break
        }
      }
    }

    return arrList
  }
}

module.exports = subsequence