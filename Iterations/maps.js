const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)


// Chaining means methods after methods
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1) // This doesnot return the value as array, but updated the value what first method call
    .filter((num) => num >= 40)
console.log(newNums);

const x = 10 
console.log(x);

