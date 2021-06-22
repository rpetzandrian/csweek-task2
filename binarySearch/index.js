/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file binary-search.js
 */

const BinarySearch = require('./binary-search');
const BinarySearchFunction = require('./binary-search-func')

let koleksi = [1, 4, 9, 12, 24, 31, 44, 49, 50, 56];
let kueri = 50;
let binarySearch = new BinarySearch();
let hasil = binarySearch.findIndex(koleksi, kueri);
let result = BinarySearchFunction(koleksi, kueri)

console.log('Hasil dari class Comp: ', hasil);
console.log('Hasil dari function Comp: ', result)