const user = {
    username: "Amos",
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`); // When we use current context/value
        console.log(this); // this talk about current context/values

    }
}

// user.welcomeMessage()
// user.username = "Sam" // This change the value
// user.welcomeMessage()

// console.log(typeof this); // refers empty object

// function chai() {
// let username = "Coder"
// console.log(this); // Now gives multiple values 
// console.log(this.username); // Works only in objects

// }

// chai()

// const chai = function () {
//     let username = "Coder"
//     // console.log(this); // Now gives multiple values 
//     console.log(this.username); // Works only in objects
// }

// Declare an arrow function
const chai = () => {
    let username = "Coder"
    console.log(this); // Now gives empty object
    // console.log(this.username);
}

// chai()

// Explicit return when we use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return 
// const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => (num1 + num2) // we wrap in {} then we've to use the return keyword


const addTwo = (num1, num2) => ({ username: "Amos" }) // to take the value we use () paranthesis


console.log(addTwo(3, 4))

// const myArray = [23, 4, 24, 2, 4, 7]

// myArray.forEach(() => {})