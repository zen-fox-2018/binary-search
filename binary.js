'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i=0; i<arr.length; i++){
    for(var j=i; j>=0; j--){
      if(arr[j-1] > arr[j]){
        var temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// var arr = [7, 2, 5, 6, 1, 3]

// SEL
// arr [1, 2, 5, 6, 7, 3]

// INS
// arr [2, 7, 5, 6, 1, 3]

function binary_search (search, array) {
  // Your searching code
  var middle = Math.floor((array.length-1)/2)
  var awal = 0
  var akhir = array.length-1
  while(true){

    if(search === array[middle]){
        return middle
    }else if( middle === 0 || middle === array.length-1 || awal === akhir){
      return -1
    }else if(search < array[middle]){
      akhir = middle-1
      middle = Math.floor(middle/2)
      
    }else{
      awal = middle+1
      middle = Math.floor(((array.length-1)+ middle)/2)

    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
// console.log('')
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}


