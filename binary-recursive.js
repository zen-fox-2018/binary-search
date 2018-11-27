function binary_search(search, array, awal = 0, akhir = array.length-1){
  let mid = Math.floor((awal + akhir)/2)

  if (awal === mid || akhir === mid){
    return (array[mid] === search) ? mid : -1
  } else {
    debugger;
    if (array[mid] === search){
      return mid
    } else if (array[mid] > search){
      return binary_search(search, array, awal, mid-1)
    } else if (array[mid] < search){
      return binary_search(search, array, mid+1, akhir)
    }
  }
}

console.log(binary_search(33, [8, 10, 10, 18, 22, 22, 32, 40, 90]))
console.log(binary_search(100, [3, 8, 10, 10, 18, 22, 22, 24, 25, 26, 27, 32, 40, 90, 100]))
console.log(binary_search(8, [8, 10, 10, 18, 22, 22, 32, 40, 90]))
console.log(binary_search(10, [8, 10, 10, 18, 22, 22, 32, 40, 90]))
console.log(binary_search(32, [8, 10, 10, 18, 22, 22, 32, 40, 90]))

console.log(binary_search(53, [3, 21, 31, 53, 53, 55, 77, 85, 89]))
console.log(binary_search(3, [3, 21, 31, 53, 53, 55, 77, 85, 89]))
console.log(binary_search(2, [3, 21, 31, 53, 53, 55, 77, 85, 89]))
