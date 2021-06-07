// Syntax 
// search(regexp)

// Example 1 
const sentence = 'This is so A1 and the inspiration is overwhelming.'
const regex = /[^\w\s]/g // any charaacter that is not a word character or whitespace
console.log(sentence.search(regex)) // Expected Output: 49

// Example 2
const str = 'Are you down?'
const regex2 = /w/g
console.log(str.search(regex2)) // Expected Output: 10

// Example 3
const quote = 'When some one throw you lemons make lemonade.'
const regex3 = /l/g
console.log(quote.search(regex3)) // Expected Output: 24