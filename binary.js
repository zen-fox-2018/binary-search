'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

//SORT WITH INSERTION
function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i <= arr.length - 1; i++) {
    var j = i
      while (j>=0 && arr[j] < arr[j-1]){  
        var temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        j--
      }
  }
  return arr
}

// console.log(ownSort(testArrayGanjil))
// console.log(ownSort(testArrayGenap))


function binary_search(search, array) {
  var begin = 0
  var end = array.length - 1
  while (begin <= end) {
    var mid = Math.floor((begin + end) / 2)
      if (search > array[mid]) {
        begin = mid + 1
      } else if(search < array[mid]){
        end = mid -1
      } else if (search == array[mid]){
        return mid
      } 
  }
  return -1
}

let test_array = [100, 120, 130, 135, 150, 170]
// console.log(binary_search(135, test_array))//true

/*
PSEUDOCODE

STORE 'begin' with 0
STORE 'end' with 'array' length minus 1
STORE 'index' with -1

WHILE 'begin' is lesser than 'end'
    STORE 'mid' with 'begin' plus 'end' divided by 2

    IF 'search' is greater than 'array' with index 'mid'
        SET 'begin' with 'mid'
    ELSE IF 'search' is lesser than 'array' with index 'mid'
        SET 'end' with 'mid'
    ELSE IF 'search' is equal to 'array' with index 'mid'
        RETURN 'mid'
    ELSE 
        RETURN -1
    ENDIF
ENDWHILE

RETURN -1

*/


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)


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
