const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // This tells about hidden properties
// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5 // Same even if we changed the value
// console.log(Math.PI);

const chai = {
    name: "Ginger Chai",
    price: 199,
    isAvailable: "true",

    orderChai: function () {
        console.log(`Chai nahi bani`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined
// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // This give the exact properties

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false, // Stop iteration
    // configurable: false    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // false

// for (let [key, value] of chai) { // Chai is not iterable
//     console.log(`${key} : ${value}`);
// }

for (let [key, value] of Object.entries(chai)) { // Now give the output
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`); // Do not want function but gives function too
    } else {

    }
}