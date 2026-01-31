const User = {
    _email: "codr@google.com",
    _password: "alkhg123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)

console.log(tea.email);
