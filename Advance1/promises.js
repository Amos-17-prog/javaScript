// fetch("http://something.com").then().catch().finally() // this is not promises
// if you don't know to make promises then you don't know much about promises

// There are two parts consume and make promises

// Creation
const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async task
    // DB call, cryptography, network call
    setTimeout(() => {
        // console.log("Async task is complete");
        resolve() // to connect with .then
    }, 1000)
}) // promise is an object represent the eventual compilation or failure

// Consumption of promise
promiseOne.then(() => { // .then have connection with resolve
    // console.log("Promise comsumed");

})

// We do in one part only instead of one 
new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    // console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "coder@google.com" })
    }, 1000)
})

promiseThree.then((user) => {
    // console.log(user); // parameters passed in resolve
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Coder", email: "coder@google.com" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then(function (username) { // this is chaining .then after .then
        console.log(username);
    })
    .catch((error) => {
        console.log(error);

    })

