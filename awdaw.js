let array = arr

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] <= array[i]) {
      
      for (let j = i + 1; j >= 0; j--) {
          console.log(j);
          
          if (array[j + 1] <= array[j]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
            
          }
      }
    }
  }