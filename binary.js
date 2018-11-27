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

  // 1st try
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

  // 2nd try
  console.log(array)
  let awal = 0
  let akhir = array.length - 1
  let tengah = Math.floor((awal + akhir)/2)
  while(search !== array[tengah]){
    debugger;
    if (tengah === akhir || tengah === awal){
      return -1
    }
    if (array[tengah] < search){
      awal = tengah
    } else if (array[tengah] > search) {
      akhir = tengah
    }
    tengah = Math.floor((awal + akhir)/2)
  }
  return tengah

}
//PSEUDOCODE
/*
  STORE `awal` with value 0
  STORE `akhir` with length of `array` minus 1
  STORE `tengah` with Math.floor((`awal` + `akhir`)/2)
  WHILE `search` is not equals to `array` with index `tengah`
    IF `tengah` is equals to `akhir` OR `tengah` equals to `awal`
      THEN RETURN -1
    IF `array` with index `tengah` is less than `search`
      THEN SET `awal` to value `tengah`
    ELSE IF `array` with index `tengah` is more than `search`
      THEN SET `akhir` to value `tengah`
    SET `tengah` to Math.floor((`awal` plus `akhir`)/2)
  END WHILE
  RETURN `tengah`
*/

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
