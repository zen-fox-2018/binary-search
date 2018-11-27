'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    debugger
   let temp = arr[i]
   let banding = i-1

   while (arr[banding] > temp && banding >= 0) {
      arr[banding+1] = arr[banding]
      banding--
   }
   arr[banding+1] = temp
   debugger
  }
  return arr
}
// console.log(ownSort(testArrayGenap))
// console.log(ownSort(testArrayGanjil))


function binary_search (search, array) {
  let start = 0 
  let end = array.length - 1
  
  while (start <= end) {
    let mid = Math.floor((start+end)/2)
    if(search > array[mid]) {
      start = mid + 1
    } else if(search < array[mid]) {
      end = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

function binaryRec (start , end , search , array) {
  let mid = Math.floor((start+end)/2)
  
  if (search == array[mid]) {
    return mid
  } else if(start == end || end == mid ) {
    return -1
  } else if(search > array[mid]) {
    return binaryRec(mid+1 , end, search , array)
  } else if(search < array[mid]) {
    return binaryRec(start , mid -1 , search , array)
  } 
 
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

let start = 0;
let end = arrayGenapSorted.length - 1 ;

console.log(binaryRec(start, end, 8, arrayGenapSorted))
console.log(binaryRec(start, end, 33, arrayGenapSorted))


// // Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
