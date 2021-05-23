// Syntax
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

// Example 1
const arr = ['rock', 'paper', 'sissors']
const result = arr.indexOf('paper')
console.log(result) // Expected Output: 1

// Example 2
const arr2 = ['dominoes', 'papa johns', 'pizza hut']
const result2 = arr2.indexOf('dominoes', 2)
console.log(result2) // Expected Output: -1

// Example 3
const arr3 = 'hello world'
const result3 = arr3.indexOf('o', 3)
console.log(`The index of the first 'o' is ${result3}`) 
// Expected Output: "The index of the first 'o' is 4"