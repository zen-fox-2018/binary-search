'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
    for(let i = 1; i < arr.length; i ++){
      let holder = arr[i]
      let j = i-1
      while(j >= 0 && arr[j] > holder){
        arr[j+1] =arr[j]
        j = j-1
        
      }
     //
      arr[j+1] = holder
    }
  return arr
}

// function binary_search (search, array) {
  // let firstIndex = 0
  // let lastIndex = array.length-1
  // while (firstIndex <= lastIndex){
  //   let midIndex = Math.floor((lastIndex + firstIndex) / 2)
  //   if(search === array[midIndex]){
  //       return midIndex
  //     }
  //   else if(search <  array[midIndex]){
  //       lastIndex = midIndex-1
  //     }
  //   else {
  //       firstIndex = midIndex +1
  //     }
    
  //   }
  //   if(search !== array){
  //     return -1
  //   }

// }

function binary_search(search, array){
  //console.log(array)
  let firstindex = 0
  let lastindex = array.length-1
  while (firstindex <= lastindex){
    var midIndex = Math.floor((lastindex + firstindex) /2)
    if(search == array[midIndex]){
      return midIndex 
    }else if(search > array[midIndex]){
      firstindex = midIndex +1
    }else {
      lastindex = midIndex -1
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
