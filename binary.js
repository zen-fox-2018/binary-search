'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  //insertion sort
  for(let i = 0; i < arr.length; i++) {
    let firstNum = arr[i]
    let j = i - 1

    while(arr[j] > firstNum){
        arr[j+1] = arr[j]
        j -= 1
    }

    arr[j+1] = firstNum
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let start = 0
  let end = array.length-1
  let middle = Math.round((start + end)/2)

  while(end >= start){
      if(array[middle] === search){
          return middle
      }else if(search < array[middle]){
          end = middle - 1
      }else{
          start = middle + 1
      }
      middle = Math.floor((start + end)/2)
  }
  return -1
}

//with recursion
function binary_search (search, array, start, end) {
  // Your searching code
  
  let middle = Math.floor((start + end)/2)
  
  if(array[middle] === search) {
    return middle
  } else if (start === middle || end === middle) {
    return -1
  } else if (array[middle] > search) {
    return binary_search(search, array, start, middle-1)
  } else if (array[middle] < search) {
    return binary_search(search, array, middle+1, end)
  } 
   
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

let start = 0
let endGenap = arrayGenapSorted.length-1
let endGanjil = arrayGanjilSorted.length-1

// Driver code
console.log(binary_search(8, arrayGenapSorted, start, endGenap))
console.log(binary_search(10, arrayGenapSorted, start, endGenap))
console.log(binary_search(33, arrayGenapSorted, start, endGenap))

console.log(binary_search(53, arrayGanjilSorted, start, endGanjil))
console.log(binary_search(3, arrayGanjilSorted, start, endGanjil))
console.log(binary_search(2, arrayGanjilSorted, start, endGanjil))

module.exports = {
  binary_search
}
