'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let array = arr

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] <= array[i]) {

      for (let j = i + 1; j >= 0; j--) {

        if (array[j + 1] <= array[j]) {
          let temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp

        }
      }
    }
  }

  return array;

}

function binary_search(search, array) {

  let low = 0
  let high = array.length - 1
  let mid = Math.floor((high + low) / 2)

  while (low != mid && mid != high) {
    mid = Math.floor((high + low) / 2)

    if (search === array[mid]) {
      return `value: ${mid}: non-rekursif`
    }

    if (search > array[mid]) {
      low = mid +1
    } else if (search < array[mid]) {
      high = mid - 1
    }

  }
  return `value: ${-1}: non-rekursif`
}

//REKURSIF
function binary_search_rekursif(search1, array1, low1, high1) {

  let mid1 = Math.floor((high1 + low1) / 2)
  
  if (low1 != mid1 && mid1 != high1) {

    if (search1 === array1[mid1]) {
      return `value: ${mid1}: rekursif`
    }
    
    if (search1 > array1[mid1]) {
      low1 = mid1 + 1
    } else if (search1 < array1[mid1]) {
      high1 = mid1 - 1
    }
    
    return binary_search_rekursif(search1, array1, low1, high1)

  } 
  return `value: ${-1}: rekursif`
  if (low1 == mid1 && mid1 == high1) {
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
console.log(`==================================================`);

console.log(binary_search_rekursif(8, arrayGenapSorted, 0, arrayGenapSorted.length-1))
console.log(binary_search_rekursif(10, arrayGenapSorted, 0, arrayGenapSorted.length-1))
console.log(binary_search_rekursif(33, arrayGenapSorted, 0, arrayGenapSorted.length-1))

console.log(binary_search_rekursif(53, arrayGenapSorted, 0, arrayGenapSorted.length-1))
console.log(binary_search_rekursif(3, arrayGenapSorted, 0, arrayGenapSorted.length-1))
console.log(binary_search_rekursif(2, arrayGenapSorted, 0, arrayGenapSorted.length-1))

module.exports = {
  binary_search
}