function setUsername(username) {
    // Complex DB calls
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password) {
    // setUsername(username) // Does not set username and goes only reference
    // setUsername.call(username) // Now this call the function and .call holds the reference
    setUsername.call(this, username) // this set the username

    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@facebook.com", "123")
console.log(chai); 
