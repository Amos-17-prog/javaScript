// var c = 300 
let a = 300

if (true) { // All the variable use in {} only but var updated anywhere 
    let a = 10;
    const b = 20;
    // c = 30
    // console.log("Inner a: " +  a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// Checking scope in Browser and code environment using node are different 

// console.log(a);
// console.log(b);
// console.log(c);


// **** Nested Scope ****
function one(){
    const username = "Amos";

    function two(){
        const website = "YouTube"
        // console.log(username);
    }
    // console.log(website);

    // two() 
    
}


one()

if(true){
    const username = "Coder"
    if(username === "Coder"){
        const website = "YouTube"
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


// ********* Interesting ***********

console.log(addone(5)) // We can access this type of function before initialize
function addone(num) {
    return num + 1
}


addTwo(5) // We cannot access before initialization because it holds the value in addTwo

const addTwo = function(num){
    return num + 2
}
