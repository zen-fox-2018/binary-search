'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // insertion sort
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        // console.log(arr[i], '=====', arr[j], arr[j-1]);
      }
    }
  }
  // console.log(arr);
  return arr;
}

function binary_search(search, array) {

  var awal = 0;
  var akhir = array.length-1;
  var tengah = Math.floor(awal + akhir / 2);

  while (search !== array[tengah]) {
    if (search > array[tengah]) {
      tengah = Math.floor(tengah + akhir / 2);
      awal = tengah;
    } else {
      tengah = Math.floor(awal + tengah / 2);
      akhir = tengah;
    }
    // console.log(awal, akhir);
    if (search !== array[tengah] && awal === akhir) {
      return -1;
    }
  }
  return tengah;
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
