'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0 ; i < arr.length; i++) {
    let temp = arr[i]
    let j = i-1
    while (arr[j] > temp && j >= 0){
      arr[j+1] = arr[j]
      j = j-1
    }
    arr[j+1] = temp
  }
    return arr
  // Your sorting code
}

function binary_search (awal,akhir,search, array) {
 
  let tengah = Math.floor((awal+akhir)/2)
  if (array[tengah] === search) {
    return tengah
  } else if (awal >= akhir) {
    return -1
  } else if (search < array[tengah]) {
    return binary_search(awal,tengah-1,search,array)
  } else if (search > array[tengah]) {
    return binary_search(tengah+1,akhir,search,array)
  }
  // while (akhir >= awal) {
  //   let tengah = Math.floor((awal+akhir)/2)
  //   if (array[tengah] === search) {
  //       return tengah
  //   } else if (search < array[tengah]) {
  //       akhir = tengah-1
  //   } else if (search > array[tengah]) {
  //       awal = tengah+1
  //   }  
  // }
  // // Your searching code
  // return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted)
// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(0,arrayGanjilSorted.length-1,89, arrayGenapSorted))

console.log(binary_search(0,arrayGanjilSorted.length-1,89, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
