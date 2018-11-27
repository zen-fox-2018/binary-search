'use strict'

var testArrayGenap = [999, 40, 18, 22, 32, 90, 10, 10, 22, 8, 2, 1]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  // console.log('====>',arr);
  for(var i = 1; i < arr.length; i++){
    debugger;
    var tempSwap = arr[i];
    for(var j = i - 1; j >= 0; j--){
      if(tempSwap < arr[j]){
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
    // console.log(arr);
  }
  return arr
}
console.log(ownSort(testArrayGenap));
// console.log(ownSort(testArrayGanjil));
