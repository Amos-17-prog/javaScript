class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username) // Get value from User class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const tx = new Teacher("chai", "chai@teacher.com", "123") 
// tx is instanceof Teacher and tea is instanceof User
tx.addCourse() // Print the value form addCourse
const tea = new User("Coder")
tea.logMe()