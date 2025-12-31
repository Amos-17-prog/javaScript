// Types of loops

// ["", "", ""] // Array of strings
// [{}, {}, {}] // Array of objects

const myArray = [1, 1, 3, 4, 5]

// For of
for (const iterator of myArray) { // iterator refers as index & object doesnot refers js objects
    // console.log(iterator); // Its doesnot requiredd increment or decrement
}

const greeting = "Hello World";

for (const element of greeting) {
    // console.log(`Eachs char is : ${element}`); // Can be used in strings too
}

// Maps

const map = new Map() // Map refers as collection of key-value pairs
map.set("NPL", "Nepal"); // It known as unique value cannot added the same key-value twice
map.set("US", "United State of America")
map.set("IN", "India")
map.set("IN", "India")

// console.log(map);

for (const [key, value] of map) { // Can be separated by using array
    console.log(key + ": " + value); // print both keys and values
}

// Does not matter give non iterable
// const myObj = {
//     game1: "PUBG",
//     game2: "COD",
// }
const myObj = {
    "game1": "PUBG",
    "game2": "COD",
}

// same as first

// for (const [key, value] of myObj) { //  myObj is not iterable
//     console.log(key + ":" + value);
// }
