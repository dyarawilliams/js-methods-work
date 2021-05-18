// Syntax
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, ... , elementN)

// Example 1
let arr = [1, 2, 3]
arr.unshift(0)
console.log(arr) // Expected Output: [0, 1, 2, 3]

// Example 2
let str = ['What', 'are', 'you', 'doing']
str.unshift('Hello', 'friend')
console.log(str) // Expected Output: ['Hello', 'friend', 'What', 'are', 'you', 'doing']

// Example 3
let arr2 = [74, 85, 96, 36]
arr2.unshift(1, 2, 3)
console.log(arr2) // Expected Output: [1, 2, 3, 74, 85, 96, 36]