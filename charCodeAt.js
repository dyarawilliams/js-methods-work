// Syntax
// charCodeAt(index)

// Example 1
const str = 'The world is a beautiful place to be.'
const index = 4
console.log(`The character code ${str.charCodeAt(index)} is equal to ${str.charAt(index)}`)
// Expected Output: "The character code 119 is equal to w"

// Example 2
const sentence = 'React is amazing and loveable!'
const i = 12
console.log(`The character code ${sentence.charCodeAt(i)} is equal to ${sentence.charAt(i)}`)
// Expected Output: "The character code 122 is equal to z"

// Example 3
const react = 'React'
console.log(react.charCodeAt(0)) // Expected Output: 82