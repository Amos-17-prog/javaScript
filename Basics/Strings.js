const name = "Amos"
const repoCount = 50

// console.log(name + repoCount + " value"); // Try to avoid this 

// Use `` instead of ""
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Amos-Coder-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('x'));

const newString = gameName.substring(-10, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString)

const newString1 = "     Coder     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://coder.com/amos%20coder"

let rep = url.replace("%20", "-")
console.log(rep);

console.log(url.includes("amr"))

console.log(gameName.split("-"));

