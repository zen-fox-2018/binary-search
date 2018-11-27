'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {

    for (let j = i - 1; j >= 0; j--) {

      if (arr[j + 1] < arr[j]) {

        var temp = arr[j + 1]

        arr[j + 1] = arr[j]

        arr[j] = temp

      }

    }

  }

  return arr
}


function binary_search(search, array) {
  // Your searching code
  var awal = 0
  var akhir = array.length - 1

  while (awal <= akhir) {

    var tengah = Math.floor((awal + akhir) / 2)

    if (search > array[tengah]) {

      awal = tengah + 1

    } else if (search < array[tengah]) {

      akhir = tengah - 1

    } else if (search == array[tengah]) {

      return tengah
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


/*
#PSEUDOCODE
STORE 'awal' with 0
STORE 'akhir' with 'array' length minus 1
WHILE 'awal' <= 'akhir'
    STORE 'tengah' with 'awal' plus 'akhir' divided by 2
    IF 'search' > 'array' with index 'tengah'
        SET 'awal' with 'tengah'
    ELSE IF 'search' < 'array' with index 'tengah'
        SET 'akhir' with 'tengah'
    ELSE IF 'search' === 'array' with index 'tengah'
        RETURN 'tengah'
    ELSE 
        RETURN -1
    ENDIF
ENDWHILE
RETURN -1
*/