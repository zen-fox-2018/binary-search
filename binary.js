'use strict'

/*
ALGORITMA
1. pertama urutkan array yang akan dicari elemen indeksnya
2. buat variabel awal sama dengan 0
3. buat variabel akhir sama dengan panjang array - 1
4. buat variabel mid dengan nilainya adalah (awal + akhir / 2) dibulatkan ke bawah
5. lakukan loop for dengan indeks i sama dengan 0 sampai panjang array
  5a. buat variabel itsExist sama dengan false , yang bertujuan untuk mengecek jika search(nilai yang dicari) ada di dalam target atau tidak ada
  5b. lakukan loop for dengan indeks j sama dengan 0 sampai panjang array
    5ba. jika search sama dengan array indeks j maka
      5baa. itsExist sama dengan true
  5c. Jika itsExist sama dengan true lakukan
    5ca. selama array[mid] tidak sama dengan search lakukan
      5caa. Jika array[mid] lebih kecil dari search, maka 
        5caaa. akhir = array.length - 1
        5caba. awal = mid + 1
      5cab. selain itu, maka
        5caba. awal = 0
        5cabb. akhir = mid - 1
      5cac. mid = Math.floor((awal + akhir) / 2)
    5cb. kembalikan mid
  5d. Selain itu, maka
    5da. return -1
 */

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(array) {
  for (var i = 1; i < array.length; i++) {
    var index = i
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > array[index]) {
        var temp = array[j]
        array[j] = array[index]
        array[index] = temp
        index = j
      }

    }
  }
  return array
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

function binary_search(search, array) {
  var awal = 0
  var akhir = array.length - 1
  var mid = Math.floor((awal + akhir) / 2)
  for (var i = 0; i < array.length; i++) {
    var itsExist = false
    for (var j = 0; j < array.length; j++) {
      if (search === array[j]) {
        itsExist = true
      }
    }
    if (itsExist === true) {
      while (array[mid] !== search) {
        if (array[mid] < search) {
          akhir = array.length - 1
          awal = mid + 1
        }
        else {
          awal = 0
          akhir = mid - 1
        }
        mid = Math.floor((awal + akhir) / 2)
      }
      return mid

    }
    else {
      return -1
    }
  }

}

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
