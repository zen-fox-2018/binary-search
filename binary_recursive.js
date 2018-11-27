'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let array = arr
  let temp = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >=0; j--) {
      if (array[j] < array[j-1]) {
        temp = array[j-1]
        array[j-1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

function binary_search (awal, akhir, search, array) {
  let tengah = Math.floor((awal+akhir)/2)
  if (array[tengah] === search) {
    return true
  }
  else if (awal === tengah || akhir === tengah) {
    return false
  }
  else if (search > array[tengah]) {
    return binary_search(tengah+1, akhir, search, array)
  }
  else if (search < array[tengah]) {
    return binary_search(awal, tengah-1, search, array)
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

var awal = 0
var akhirGenap = arrayGenapSorted.length-1
var akhirGanjil = arrayGanjilSorted.length-1

// Driver code
console.log(binary_search(awal, akhirGenap, 8, arrayGenapSorted))
console.log(binary_search(awal, akhirGenap, 10, arrayGenapSorted))
console.log(binary_search(awal, akhirGenap, 33, arrayGenapSorted))

console.log(binary_search(awal, akhirGanjil, 53, arrayGanjilSorted))
console.log(binary_search(awal, akhirGanjil, 3, arrayGanjilSorted))
console.log(binary_search(awal, akhirGanjil, 2, arrayGanjilSorted))

module.exports = {
  binary_search
}
