// var c = 300 
let a = 300

if (true) { // All the variable use in {} only but var updated anywhere 
    let a = 10;
    const b = 20;
    // c = 30
    console.log("Inner a: " +  a);
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// Checking scope in Browser and code environment using node are different 

console.log(a);
// console.log(b);
// console.log(c);
