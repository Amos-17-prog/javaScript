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
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "coder@google.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user); // parameters passed in resolve
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
    .finally(() => { // This always execute
        console.log("Finally, the promises is either resolved or rejected");
    })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

// console.log(typeof promiseFive);

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch("https://api.github.com/users/amos-17-prog")
        // console.log(response);
        // console.log(typeof response);
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getAllUsers()

fetch("https://api.github.com/users/amos-17-prog")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("E: ", err);
    })