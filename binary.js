'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        debugger;
        var tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  var awal = 0
  var akhir = array.length
  var tengah = Math.floor(array.length / 2)
  
  while (array[tengah] !== search) {
    debugger;
    for (let i = awal; i < akhir; i++) {
      if (array.indexOf(search) < tengah) {
        akhir = tengah
        tengah = Math.floor(akhir/2)
      }
      else if (array.indexOf(search) > tengah) {
        awal = tengah
        tengah = Math.floor((awal + akhir) / 2)
      }
    }
    if (array[tengah] !== search && awal === akhir) {
      return -1
    }
  }
  return tengah
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
