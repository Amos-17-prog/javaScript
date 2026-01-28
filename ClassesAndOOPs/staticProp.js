class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createdId() {
        return `123`
    }
}
const coder = new User("Coder")
// console.log(coder.createdId()); // createdId is not for everyone

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email
    }
}

const iphone = new Teacher("iPhone", "i@phone.com")
console.log(iphone.createdId()); // Doesnot give access even if it's child


