let myName = "Amos     "

String.prototype.trueLength = function(){
    // console.log(`${name}`);
    console.log(`${this.trim().length}`); // This only give true length of myName is remove spaces
    
}
myName.trueLength()
// console.log(myName.truelength); // undefined
// console.log(myName.trueLength); // undefined

let myHeroes = ["thor", "spiderMan", "batman"]

let heroPower = {
    thor: "Hammer",
    spiderMan: "Sling",

    getSpiderPower: function () {
        console.log(`Spidey power is: ${this.spiderMan}`);
    }
}

// This available in all the objects, arrays, strings
Object.prototype.amos = function () {
    console.log(`Amos is present in all object`);
}

Array.prototype.heyAmos = function () {
    console.log(`Amos says hello`);
}

// myHeroes.amos()
// myHeroes.heyAmos() // both works
// heroPower.heyAmos() // doesnot have access of heyAmos()

// Inheritance

const user = {
    isLogin: true,
    username: "Chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS Assignment",
    isFullTime: true,
    __proto__: teachingSupport,
}

teacher.__proto__ = user // This is outDated Approaches

// Modern syntax

Object.setPrototypeOf(teachingSupport, teacher)