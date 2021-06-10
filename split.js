// Syntax
// split()
// split(separator)
// split(separator, limit)

// Example 1
const str = 'This string can be seperated.'
const result = str.split(' ') 
console.log(result) // Expected Output: ["This", "string", "can", "be", "seperated."]

// Example 2
const str2 = 'Seperate. Me. Yayy'
const result2 = str2.split('.')
console.log(result2) // Expected Output: ["Seperate", " Me", " Yayy"]

// Example 3
const sentence = 'Split Me'
const result3 = sentence.split('')
console.log(result3) // Expected Output: ["S", "p", "l", "i", "t", " ", "M", "e"]

