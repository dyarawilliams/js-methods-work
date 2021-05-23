// Syntax
// every((element) => { ... } )
// every((element, index) => { ... } )
// every((element, index, array) => { ... } )

// Example 1 
const arr = [10, 20, 30, 40, 50, 60, 70]
const result = arr.every(elem => elem > 9)
console.log(result) // Expected Output: 

// Example 2
const ages = [32, 16, 18, 10, 13, 25]
const drivingAge = 16
let canDrive = ages.every(age => age >= drivingAge)
console.log(canDrive) // Expected Output: false

// Example 3 (not sure about this example)
const arr3 = [20, 40, 60, 30, 7, 80]
arr3.every((elem, index, arr) => {
    arr[index++] += 5
    console.log(`[${elem}] --> ${index} [${arr}]`)
    return elem <= 40
}) 
// Expected Output: 
// "[20] --> 1 [25,40,60,30,7,80]"
// "[40] --> 2 [25,45,60,30,7,80]"
// "[60] --> 3 [25,45,65,30,7,80]"