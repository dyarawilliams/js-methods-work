// Syntax 
// sort()
// sort((firstEl, secondEl) => { ... } )

// Example 1
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let result = daysOfTheWeek.sort()
console.log(result) // Expected Output: ['Friday', 'Monday', 'Saturday', 'Sunday', 'Thursday', 'Tuesday', 'Wednesday']

// Example 2
const nums = [52, 83, 56, 1, 77]
const result2 = nums.sort()
console.log(result2) // Expected Output: [1, 52, 56, 77, 83]

 // Example 3 
 const fruits = ['pears', 'strawberries', 'grapes', 'peaches', 'pineapples']
 const result3 = fruits.sort()
 console.log(result3) // Expected Output: ["grapes", "peaches", "pears", "pineapples", "strawberries"]