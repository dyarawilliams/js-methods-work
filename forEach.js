// Syntax
// forEach((element) => { ... } )
// forEach((element, index) => { ... } )
// forEach((element, index, array) => { ... } )

// Example 1
let arr = [1,2,3,4]
arr.forEach(element => element)
console.log(arr) // Expected Output: [1,2,3,4]

// Example 2
let arr2 = ['Hello', 'I', 'am', 'forEach']
arr2.forEach(word => word)
console.log(arr2) // Expected Output: [Hello, I, am, forEach]

// Example 3
const arr3 = [5,1,3]
arr3.forEach(num => num)
console.log(arr3)