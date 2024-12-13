// Create a function that takes a number as an argument and returns an array following the FizzBuzz rules up to that number.

// - For numbers divisible by 3, insert 'fizz' into the array
// - For numbers divisible by 5, insert 'buzz' into the array  
// - For numbers divisible by both 3 and 5, insert 'fizzbuzz' into the array
// - For all other numbers, insert the number itself

// Example
// fizzbuzzArray(5) // returns [1, 2, 'fizz', 4, 'buzz']
// fizzbuzzArray(15) // returns [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']


function fizzbuzzArray(num) {
    const arr = []

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzbuzz');
        } else if (i % 3 === 0) {
            arr.push('fizz')
        } else if (i % 5 === 0) {
            arr.push('buzz')
        }else{
            arr.push(i)
        }
    }
    console.log(arr);
    return arr;
}

fizzbuzzArray(15)
// output:  [
//   1,          2,
//   'fizz',     4,
//   'buzz',     'fizz',
//   7,          8,
//   'fizz',     'buzz',
//   11,         'fizz',
//   13,         14,
//   'fizzbuzz'
// ]