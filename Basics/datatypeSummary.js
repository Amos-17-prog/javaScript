// #Primitive Data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 193.3

const isLoggedIn = true
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 823647328883972798373847n

// Reference Data Types (Non-Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Krish", "Flying Jatt"]

let myObj = {
    name: "Amos",
    age: 22,
    study: "BCA",
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof id);
