// Singleton
// Object.create

// Object literals

const mySys = Symbol("key1")
const user = {
    name: "Amos", // keys reads as "name"
    "full name": "Amos Tharu",
    [mySys]: "mykey1", // [] use for Sysbol keys
    age: 22,
    email: "amostharu@google.com",
    location: "Kathmandu",
    loginDays: ["Monday", "Thursday"]
}

console.log(user.email); // Try to avoid access like this
console.log(user["email"]); // As I said before keys reads as string ""
console.log(user["full name"]); // This only can be accessed by this -> [""]
console.log(typeof user[mySys]); // This gives keys as symbol

user.email = "amostharu@chatgpt.com"
console.log(user);
// Object.freeze(user) // Value cannot be change in user 
// user.email = "amostharu@microsoft.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}
user.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`); 
}

console.log(user.greeting); // [Function (anonymous)]
// console.log(user.greeting()); // undefined
user.greeting()

console.log(user.greeting2);
console.log(user.greeting2());
user.greeting2()