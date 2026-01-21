const user = {
    username: "Amos",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log("Got user details from databases");
        // console.log(`Usernam: ${this.username}`); // Without this we get username undefined
        console.log(this); // print all object of user   
    }
}

// console.log(user.username);
// user.getUserDetails()
// console.log(user.getUserDetails());
// console.log(this); // empty objects

function Users(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this; // Implicitly always return 
}

const userOne = new Users("Amos", 2, true)
const userTwo = new Users("Coder", 6, false)
console.log(userOne.constructor); // prints userTwo values by override if we don't use new
// console.log(userTwo);
// Constructor gives new instances 

// new object create
// constructor function call with the use of new keyword