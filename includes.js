// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// Example 1
const arr = "Building software is the best thing ever."
const word = 'software'
console.log(`The word "${word}" ${arr.includes(word) ? 'is' : 'is not'} in the sentence`)
// Expected Output: "The word "software" is in the sentence"

// Example 2
const str = [1, 2, 3, 4]
let result2 = str.includes(2, 3)
console.log(result2) // Expected Output: false

// Example 3
const str2 = [19, 27, 17, 25]
let result3 = str2.includes(25, -1)
console.log(result3) // Expected Output: true