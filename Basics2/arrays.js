// Array
const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Thor", "Iron Man", "Captain America", "Hulk"]

const myArray2 = new Array(1, 3, 3, 2)

// console.log(myArray[0]);

// Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
// myArray.pop()

// myArray.unshift(7) // Try to avoid because it shift all the array from 0 
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9)); // -1 for doesnot exist in array

// const newArray = myArray.join() // This convert an array into String

// console.log(myArray);
// console.log(newArray); 

// console.log(myArray[0]);

// Slice, Splice
console.log("A ", myArray);

const myN1 = myArray.slice(1, 3) // This include 1 to 2
console.log(myN1);

console.log("B ", myArray);

const myN2 = myArray.splice(1, 3) // This inclue 1 to 3 also remove the array from selected part
console.log("C ", myArray);
console.log(myN2);