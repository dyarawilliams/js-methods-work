// Syntax 
// slice()
// slice(start)
// slice(start, end)

// Example 1
const arr = [10, 17, 20, 27, 30]
const result = arr.slice()
console.log(result) // Expected Output: [10, 17, 20, 27, 30]

// Example 2
const arr2 = [2, 4, 6, 8, 10]
const result2 = arr2.slice(2)
console.log(result2) // Expected Output: [6, 8, 10]

// Example 3
const str = 'Hello, today is a beautiful day'
const result3 = str.slice(7, 27)
console.log(result3) // Expected Output: "today is a beautiful"