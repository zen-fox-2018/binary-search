'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > temp; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  let kecil = 0;
  let besar = array.length - 1;

  while (kecil <= besar) {
    let midPoint = Math.floor((besar + kecil) / 2);

    if (array[midPoint] === search) {
      debugger;
      return midPoint
    } else {
      if (array[midPoint] > search) {
        debugger;
        besar = midPoint - 1
      } else {
        debugger;
        kecil = midPoint + 1
      }
    }
  }
  return -1
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
