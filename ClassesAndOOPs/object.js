// function is a function but if we want then we can behave funtion into object
// In js, everything is a object like array, strings
function multiplyByFive(num) {
    return num * 5
}

multiplyByFive.power = 2

console.log(multiplyByFive(5));
console.log(multiplyByFive.power); // 2
console.log(multiplyByFive.prototype); // Empty object, By default set the context

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++ // who ever call increase score
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("Chai", 30)
const tea = createUser("Tea", 80)

chai.printMe()

// Gives Cannot read properties of undefined (reading 'printMe') and properties is inject
// If we use new keyword then this doesnot give the above problem