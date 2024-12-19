
// Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) 
// letters as input and returns the missing letter in the array.


function findMissingLetter(arr) {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Find the index of the first letter in the array in the alphabet string
    const startIndex = alphabet.indexOf(arr[0]);
  
    for (let i = 0; i < arr.length; i++) {
      // If the current letter in the array is not the same as the current letter in the alphabet string, return the current letter in the alphabet string
      if (arr[i] !== alphabet[startIndex + i]) {
        return alphabet[startIndex + i];
      }
    }
  
    // If no letter is missing, return an empty string
    return '';
  }
  