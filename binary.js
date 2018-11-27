// 'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  // insertion sort
  for (var i = 0; i < arr.length; i++) {
    for (var j= i+1; j >= 0; j--){
      if  (arr[j] < arr[j-1]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
/*
pseudocode
+++++++++++++++
STORE "indexStart" equals to 0
STORE "indexLast" equals to array.length-1
WHILE LOOP
STORE "indexDivider" equals to (0+(arr.length-1))/2
IF "search" equals to array[indexDivider]
  RETURN "indexDivider"
ELSE IF "search" greater than array[indexDivider]
  "indexStart" equals to "indexDivider" added by 1
ELSE
  "indexLast" equals to "indexDivider" substracted by 1
END WHILE LOOP
RETURN -1;

*/
function binary_search (search, array) {
  // Your searching code
  var indexStart = 0;
  var indexLast = array[array.length-1];
  while (indexStart <= indexLast) {
    var indexDivider = Math.floor((indexStart+indexLast)/2);
    if (search == array[indexDivider]){
      return indexDivider;
    }
    else if (search > array[indexDivider]) {
      indexStart = indexDivider + 1;
    }
    else {
      indexLast = indexDivider - 1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));
//
console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// }
