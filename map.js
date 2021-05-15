// Syntax
// map((element) => { ... } )
// map((element, index) => { ... } )
// map((element, index, array) => { ... } ) 

// Example 1 
const arr1 = [2, 4, 6, 8]
const result1 = arr1.map(x => x + 2)
console.log(result1) // Expected output: [4, 6, 8, 10]

// Example 2 
const arr2 = [10, 20, 30, 40, 50]
const result2 = arr2.map((x, i) => {
    return `Index: ${i} Element: ${x}`
})
console.log(result2) // Expected Output: [Index: 0 Element: 10, Index: 1 Element: 20, Index: 2 Element: 30, Index: 3 Element: 40, Index: 4 Element: 50]

// Example 3
const prices = [4, 56, 76, 90]
const result3 = prices.map(price => '$' + price)
console.log(result3) // Expected Output: [$4, $56, $76, $90]