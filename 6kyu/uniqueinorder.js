/*
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and 
preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(sequence){
const arr = typeof sequence === 'string' ? sequence.split('') : sequence;
  //your code here - remember iterable can be a string or an array
  const res = [];
  for(let i =0;i<arr.length;i++){
    if(arr[i] !== arr[i-1]){
      res.push(arr[i])
    }
  }
  console.log(res);
  
  return res
}
uniqueInOrder('ABBCcAD') 
// output: [ 'A', 'B', 'C', 'c', 'A', 'D' ]   