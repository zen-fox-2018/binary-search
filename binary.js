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

function binary_search (search, array) {
  let awal = 0
  let akhir = array.length-1
  let tengah = Math.floor((awal+akhir)/2)

  while (tengah !== awal && tengah !== akhir) {
    tengah = Math.floor((awal+akhir)/2)

    if (search === array[tengah]) {
      return true
    }
    else if (search < array[tengah]) {
      akhir = tengah - 1
    }
    else if (search > array[tengah]) {
      awal = tengah + 1
    }
  }
  return false
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
