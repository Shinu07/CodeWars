// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
    // Handle edge case: Empty array
    if (arr.length === 0) {
      throw new Error("Array is empty. Cannot find min and max.");
    }
  
    // Initialize min and max with the first element
    let max = arr[0];
    let min = arr[0];
  
    // Start the loop from the second element (i = 1)
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max
      }
      if (arr[i] < min) {
        min = arr[i]; // Update min
      }
    }
  
    // Return min and max in an array
    return console.log([min, max]);
    
  }

  minMax([45,8,78,26,1,83,2,10,60])
  //output: [min, max];