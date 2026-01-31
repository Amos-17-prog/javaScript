class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() // _email is almost private property
    }
    set email(val){
        this._email = val
    }

    get password() {
        return `${this._password}coder` // Cannot set property password of #<User> which has only a getter
    }
    set password(value) {
        this._password = value // Maximum call stack size exceeded
        // Error because both constructor and setter both set the value if we declared the same name of constructor and setter
    }
}

const coder = new User("coder@google.com", "abc")
console.log(coder.password);
console.log(coder.email);
