const findIndexRecursive = (collection, query, x, y) => {
  let z = Math.floor((x + y) / 2)
  if (z === x) {
    if (collection[z] === query) {
      return z
    }
  } else {
    if (collection[z] === query) {
      return z
    } else if (collection[z] < query) {
      return findIndexRecursive(collection, query, z, y)
    } else {
      return findIndexRecursive(collection, query, x, z)
    }
  }
}

module.exports = findIndex = (collection, query) => {
  return findIndexRecursive(collection, query, 0, collection.length)
}