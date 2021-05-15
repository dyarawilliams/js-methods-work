// Syntax 
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// Example 1
const arr = [2,4,6,8,10]
const result = arr.filter(num => num < 5)
console.log(result) // Expected Output: [2,4]

// Example 2
const arr2 = ['intelligent', 'passion', 'strawberry', 'courage', 'destiny']
const result2 = arr2.filter(word => word.length > 8)
console.log(result2) // Expected Output: ["intelligent", "strawberry"]

// Example 3
const states = [
    {name: 'South Carolina', population: 5148714},
    {name: 'New York', population: 19453561},
    {name: 'Florida', population: 21477737},
    {name: 'California', population: 39512223},
    {name: 'Washington', population: 7614893},
]
const smallStates = states.filter(state => state.population < 8000000)
console.log(smallStates) // Expected Output: [{name: 'South Carolina', population: 5148714}, {name: 'Washington', population: 7614893}]