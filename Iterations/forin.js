const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

// for in loop

for (const key in myObj) {
    // console.log(key); // this print keys only
    // console.log(myObj[key]); // this print values only
    // console.log(`${key} shorcut is for ${myObj[key]}`); // prints both
}

const prog = ["JS", "Python", "CPP", "Java", "Ruby"]

for (const key in prog) {
    // console.log(key) // gives keys as index
    // console.log(prog[key]) // gives keys as array element
}

const map = new Map() // Map refers as collection of key-value pairs
map.set("NPL", "Nepal"); // It known as unique value cannot added the same key-value twice
map.set("US", "United State of America")
map.set("IN", "India")
map.set("IN", "India")

for (const key in map) {
    console.log(key); // Doesnot print because map is not iterable
}