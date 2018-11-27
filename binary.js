'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    for (let j = i-1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j+1] = arr[j]
        arr[j] = temp
      } else {
        break;
      }
    }
  }
  return arr
}

// function binary_search (search, array) {
  // let low = 0
  // let high = array.length - 1
  
//   while (high >= low) {
//     let mid = Math.floor((low + high)/2)
//     if (array[mid] === search) {
//       return mid
//     } else {
//       if (search > array[mid]) {
//         low = mid + 1
//       } else {
//         high = mid -1
//       }
//     }
//   }
//   return -1;
// }

// rekursif
function binary_search (search, array, low, high) {
  if (low === undefined && high === undefined) {
    low = 0
    high = array.length - 1
  }
  debugger
  if (high < low) {
    return -1
  } else {
    let mid = Math.floor((low + high)/2)
    if (array[mid] === search) {
      return mid
    } else {
      if (search > array[mid]) {
        low = mid + 1
      } else {
        high = mid -1
      }
      return binary_search(search, array, low, high)
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

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
