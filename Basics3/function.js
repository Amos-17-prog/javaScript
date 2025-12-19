function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("O");
    console.log("S");
}

sayMyName // reference
// sayMyName() // Execution

// function addTwoNum(num1, num2) { // num1, num2 are parameters
//     console.log(num1 + num2);
// }

// const result = addTwoNum(3, 5) // 3, null are arguments
// console.log(result); // Undefined

function addTwoNum(num1, num2) { // num1, num2 are parameters
    // let result = num1 + num2
    // return result
    return num1 + num2

    console.log("Amos"); // Cannot execute after the return
}


const result = addTwoNum(3, 5) // 3, null are arguments

// console.log("Result: " + result); 

// function loginUserMessage(username){
function loginUserMessage(username = "Sam") { // if you cannot pass any value the default value will be Sam
    if (username === undefined) {
        // if(!username){
        console.log("Please enter your username");
        return

    }
    return `${username} just logged in`;
}

// loginUserMessage("Coder") // Print nothing
// console.log(loginUserMessage("Coder"));
console.log(loginUserMessage("Amos")); // you pass nothing return undefined
