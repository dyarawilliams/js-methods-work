// Syntax 
// reduce((accumulator, currentValue) => { ... } )
// reduce((accumulator, currentValue, index) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Example 1
const arr = [1,2,3,4,5]
const reducer = arr.reduce((acc, currentValue) => acc + currentValue)
console.log(reducer) // Expected Output: 10

//Example 2
const arr2 = [10,12,30,79,50]
const reducer2 = arr2.reduce((acc, currentValue) => acc + currentValue)
console.log(reducer2) // Expected Output: 181

// Example 3
const arr3 = [10,11,12,13]
const reducer3 = arr3.reduce(((acc, currentValue) => acc + currentValue), 3)
console.log(reducer3) // Expected Output: 49