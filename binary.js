'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0 ; i <arr.length -1 ; i++){
    for (let j = i+1 ; j >= 0 ; j--){
      if (arr[j] < arr[j-1]){
        let tmp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tmp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  // Cara shortcut
  // if (array.indexOf(search) !== -1){
  //   return true
  // }
  // return false;

  // Cara binary
  // let awal = 0
  // let akhir = array.length - 1
  // let tengah = Math.floor((awal + akhir)/2)
  // console.log(array)
  // while (true){
  //   let tengah = Math.floor((awal + akhir)/2)
  //   if (array[tengah] === search){
  //     return tengah
  //   } else {
  //     if (akhir - awal === 1){
  //       return array[akhir] === search ? akhir : -1
  //     }
  //     if (tengah === 0 || tengah === array.length - 1 || (awal === akhir)){
  //       return -1
  //     }
  //     if (array[tengah] > search){
  //       akhir = tengah - 1
  //     } else {
  //       awal = tengah + 1
  //     }
  //   }
  // }

  // cara 2
  // while(search !== array[tengah]){
  //   debugger;
  //   if (tengah === akhir || tengah === awal || (akhir - awal === 1)){
  //     return -1
  //   }
  //   if (array[tengah] < search){
  //     awal = tengah
  //   } else if (array[tengah] > search) {
  //     akhir = tengah
  //   }
  //   tengah = Math.floor((awal + akhir)/2)
  // }
  // return tengah

  // Cara recursive
  // console.log(array)
  if (array === undefined || array.length <= 2){
    // if (array[0] !== search && array[1] !== search){
      return -1
    // }
  } else {
    let awal = 0
    let akhir = array.length - 1
    let tengah = Math.floor((awal+akhir)/2)
    // console.log(array.slice(tengah, array.length))
    // console.log(array.slice(0,tengah+1))
    console.log(array)
    debugger;
    if (search === array[tengah]){
      return tengah
    // } else if (tengah === akhir || tengah === awal){
    //   return -1
    } else {
      if (array[tengah] < search){
        return binary_search(search, array.slice(tengah, array.length))
      } else if (array[tengah] > search) {
        return binary_search(search, array.slice(0,tengah+1))
      }
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
