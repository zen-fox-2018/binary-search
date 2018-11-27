'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=1; i<arr.length; i++){
    var index=i

    for(let j=i-1; j>=0; j--){
      if(arr[index]<arr[j]){
        [arr[j], arr[index]] = [arr[index], arr[j]]
        index= j
      }
    }

  }
  return arr
}

function binary_search (search, array) {
  // Your searching code

  var firstIndex = 0
  var lastIndex = array.length-1
  var midIndex = Math.floor((firstIndex+lastIndex)/2)


  while(array[midIndex] !== search){

    if(midIndex === firstIndex || midIndex === lastIndex ){
      return -1
    }

    if(array[midIndex]>search){
      lastIndex = midIndex
    } 
    else if(array[midIndex]<search){
      firstIndex = midIndex
    }
    midIndex = Math.floor((firstIndex+lastIndex)/2)

  }

  return midIndex
}

function binary_search_recursive (search, array, firstIndex, lastIndex) {
  // Your searching code 

  if(firstIndex === undefined && lastIndex === undefined){
    firstIndex = 0
    lastIndex = array.length-1
  }

  var midIndex = Math.floor((firstIndex + lastIndex)/2)
  // console.log(firstIndex, midIndex, lastIndex, array[midIndex])

  if(firstIndex === lastIndex - 1 && array[firstIndex] !== search && array[lastIndex] !== search){
    return -1
  }
  else if(array[midIndex] === search){
    return midIndex
  }
  else if(array[midIndex] < search){
    return binary_search_recursive(search, array, midIndex, lastIndex)
  }
  else if(array[midIndex] > search){
    return binary_search_recursive(search, array, firstIndex, midIndex)
  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

//arrayGanjilSorted = [3, 21, 31, 53, 53, 55, 77, 85, 89]
//arrayGenapSorted = [8, 10, 10, 18, 22, 22, 32, 40, 90]

//Driver code
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//1,2
console.log(binary_search(33, arrayGenapSorted))//-1

console.log(binary_search(53, arrayGanjilSorted))//3,4
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

console.log("\n" + "recursives:" )
console.log(binary_search_recursive(8, arrayGenapSorted))//0
console.log(binary_search_recursive(10, arrayGenapSorted))//1,2
console.log(binary_search_recursive(33, arrayGenapSorted))//-1

console.log(binary_search_recursive(53, arrayGanjilSorted))//3,4
console.log(binary_search_recursive(3, arrayGanjilSorted))//0
console.log(binary_search_recursive(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}
