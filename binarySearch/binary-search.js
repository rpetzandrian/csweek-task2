class BinarySearch {
    findIndexRecursive(collection, query, x, y) {
        let z = Math.floor((x + y) / 2)
        if (z === x) {
            if (collection[z] === query) {
                return z
            }
        } else {
            if (collection[z] === query) {
                return z
            } else if (collection[z] < query) {
                return this.findIndexRecursive(collection, query, z, y)
            } else {
                return this.findIndexRecursive(collection, query, x, z)
            }
        }
    }

    findIndex(collection, query) {
        return this.findIndexRecursive(collection, query, 0, collection.length)
    }
}

module.exports = BinarySearch;