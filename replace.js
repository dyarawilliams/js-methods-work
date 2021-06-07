// Syntax
// replace(substr, newSubstr)
// replace(substr, replacerFunction)

// Example 1
const str = 'JS is fun.'
const result = str.replace('JS', 'JavaScript')
console.log(result)// Expected Output: "JavaScript is fun."

// Example 2
const str2 = 'The sun shines bright.'
const result2 = str2.replace('sun', 'moon')
console.log(result2) // Expected Output: "The moon shines bright."

// Example 3
const str3 = 'Learn java you will be amazed.!'
const regex = /Java/gi
const result3 = str3.replace(regex, 'JavaScript')
console.log(result3) // Expected Output: "Learn JavaScript you will be amazed.!"
