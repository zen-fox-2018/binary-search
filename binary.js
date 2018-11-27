'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    for(let j = i-1; j >= 0 ;j--) {
      if(arr[j] > temp) {
        arr[j+1] = arr[j]
        arr[j] = temp
      } 
    }
  }
  return arr
}

function binary_search (search, array) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor(array.length/2);

  while(start <= end) {
    middle = Math.floor((start+end)/2);
    if(search === array[middle]) {
      return middle
    } else {
      if(search < array[middle]) {
        end = middle - 1
      } else if (search > array[middle]) {
        start = middle + 1;
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

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))
  
module.exports = {
  binary_search
}