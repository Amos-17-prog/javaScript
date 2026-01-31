function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
}

const xhr = new User("Coder@google.com", "243kas")
console.log(xhr.email);

