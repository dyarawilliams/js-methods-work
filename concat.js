// Syntax
// concat(str1)
// concat(str1, str2)
// concat(str1, str2, ... , strN)

// Example 1
const str00 = 'Hello'
const str01 = 'JavaScript!'
const result = str00.concat(', ', str01)
console.log(result) // Expected Output: "Hello, JavaScript!"

// Example 2
const sentence = "Let's Go"
const word = 'play'
const result2 = sentence.concat(', ', word)
console.log(result2) // Expected Output: "Let's Go, play"

// Example 3
const str = 'J'
const str1 = 'S'
const result3 = str.concat(str1)
console.log(result3) // Expected Output: "JS"