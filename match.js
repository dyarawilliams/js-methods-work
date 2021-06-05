// Syntax 
// match(regexp)

// Example 1 (The i flag ignores case)
const str = 'Welcome to this Beautiful place of beautiful people. Let the fun begin'
const regex = /beautiful/gi
const found = str.match(regex)
console.log(found) // Expected Output: ["Beautiful", "beautiful"]

// Example 2
const sentence = 'Apex is the #1 best game ever!'
const regex2 = /[0-9A-Z]/g
const found2 = sentence.match(regex2)
console.log(found2) // Expected Output: ["A", "1"]

// Example 3
const quote = 'Success is not final; failure is not fatal: It is the courage to continue that counts.'
const capturingRegex3 = /(?<inspiration>success|failure) is not/
const result3 = quote.match(capturingRegex3)
console.log(result3) // Expected Output: ["Success is not", "failure is not"]
