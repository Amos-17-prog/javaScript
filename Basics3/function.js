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
// console.log(loginUserMessage("Amos")); // if you pass nothing return undefined

// function calculateCartPrice(...num1){ // used rest all the items are combined now
function calculateCartPrice(val1, val2, ...num1) { // first two argument are val1, val2 and rest is num1
    return num1
}

// console.log(calculateCartPrice(401, 200, 205, 219));

const user = {
    username: "Amos",
    prices: 199,
}

function handleObject(anyobject) {
    console.log(`Username is: ${anyobject.username} and Price is: ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399,
})

const myNewArray = [100, 300, 230, 340]

function returnValue(getArray){
    return getArray[1]
}

// console.log(returnValue(myNewArray))
console.log(returnValue([2300, 4280, 238470])) // We can pass like this also