
// Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) 
// letters as input and returns the missing letter in the array.

//First version returns a single missing letter (designed for finding one consecutive missing letter)
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
console.log(findMissingLetter(['c','d','e','g']));

  
  
// Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) 
// letters as input and returns the missing letter in the array.

// Second version returns an array of all missing letters (designed for finding multiple missing letters)

function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(arr[0]);
    const endIndex = alphabet.indexOf(arr[arr.length - 1]);
    const missingLetters = [];
    
    for (let i = startIndex; i <= endIndex; i++) {
        if (!arr.includes(alphabet[i])) {
            missingLetters.push(alphabet[i]);
        }
    }
    
    return missingLetters;
}

console.log(findMissingLetter(['c','d','e','s']));
//output: ['f', 'g', 'h', 'i','j', 'k', 'l', 'm','n', 'o', 'p', 'q','r']
  
  