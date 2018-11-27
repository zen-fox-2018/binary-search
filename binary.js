'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var temp = 0
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j >=0; j--) {
      if (arr[j] < arr[j-1]) {
        temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp
        
      }else{
        break
      }
    }
  }
  return arr
}
console.log(ownSort(testArrayGanjil))

// function binary_search (search, array) {
//   // Your searching code
//   var start= 0
//   var end= array.length-1
  
//   while(start <= end){
//     var middle = Math.floor((start +end)/2)
//       //  console.log(start,'ini start')
//       //   console.log(end,'ini end')
//       //   console.log(middle,'ini middle')
//       if(array[middle] === search){
//       return true
//       }
//       else if(search > array[middle]){
        
//         start = middle +1
        
//       } else{
//         end=  middle -1
//       }
//   }
//   return false
// }

//recursive
function binary_search (search, array ,start = 0 ,end = array.length -1 ) {
  // Your searching code
  var middle = ~~((start+end)/2)
  //console.log(start,'ini start',end,'ini end')
  if(array[middle] == search){
    return true
  } else if(start >= end){
    return false
  }
  else if(array[middle] < search){
    return binary_search(search, array, start = (middle+1), end)
  } else {
    return binary_search(search, array, start, end = (middle - 1))
  }
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
