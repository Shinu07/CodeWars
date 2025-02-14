/*
Introduction
The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar
 with the language. It's used by kids in several screenplays created by Astrid Lindgren.

The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). 
Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to 
understand a conversation encoded in this manner, especially if spoken rapidly.

Example
In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
Note: The dashes - in the example are added for readability and should not be included in the output.

The Assignment
Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and 
returns the result, converted into robber language, as a string.

Notes
Only consonants should be modified; leave all other characters unchanged.
Both upper and lower case characters will be tested.
The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.
*/

function robberEncode(sentence) {

    // List of consonants
      const consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".split('');
  
  const isConsonant= (char)=> consonants.includes(char);
  
 let encoded = '';
  for(let char of sentence){
    if(isConsonant(char)){
      const inserto = char === char.toUpperCase()?"O":"o";
      encoded += char+inserto+char;
    }else{
      encoded += char;
    }
  }
  return encoded;
  }
//2nd alternative
  const robberEncode = sentence =>
    sentence
      .replace(/[bcdfghjklmnpqrstvwxyz]/g, '$&o$&')
      .replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '$&O$&');