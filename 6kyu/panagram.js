// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("") // Split the alphabet into an array of letters
    .every((x) => string.toLowerCase().includes(x));
  //  it convert each character to lowercase and check it include that
  // character or not If all characters from 'a' to 'z' are found in the string, every() returns true
  //   If any character is missing, every() returns false
}

// Second version
function isPangram(string) {
  // Convert the string to lowercase and remove non-alphabetic characters
  const cleanStr = string.toLowerCase().replace(/[^a-z]/g, "");

  // Create a Set from the cleaned string to get unique letters
  const uniqueLetters = new Set(cleanStr);

  // Check if we have all 26 letters of the alphabet
  return uniqueLetters.size === 26;
}
