'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 1; i < arr.length; i++){
    var tempSwap = arr[i];
    for(var j = i - 1; j >= 0; j--) {
      if(tempSwap < arr[j]) {
        arr[j+1] = arr[j];
        if(j === 0){
          arr[j] = tempSwap;
        }
      }
      else {
        arr[j+1] = tempSwap;
        break;
      }
    }
  }
  return arr
}

function binary_search (search, array, awal, akhir) {
  // Your searching code
  if(awal === undefined && akhir === undefined){
    var awal = 0;
    var akhir = array.length - 1;
  }

  if(awal <= akhir) {
    var tengah = Math.floor((awal + akhir) / 2);
    if(search === array[tengah]){
      return tengah;
    } else if(search > array[tengah]) {
      return binary_search(search, array, tengah + 1, akhir);
    } else {
      return binary_search(search, array, awal, tengah - 1);
    }
  } else {
    return -1;
  }
}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// Driver code
// console.log(arrayGenapSorted);
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
