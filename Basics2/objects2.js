// 
// const tinder = new Object() // singleton object
const tinder = {} // non-singleton object

tinder.id = "289abc"
tinder.name = "Sam"
tinder.isLoggedIn = false

// console.log(tinder);

// object underneath object
const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Coder",
            lastname: "ts"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "c", 6: "d" }

// const combineObject = { obj, obj2 } // this return as obj: {}, obj2: {}
// const combineObject = Object.assign(obj, obj2) // 1; 'a', 2: "b", 3: "c", 4: "d"
// const combineObject = Object.assign({}, obj, obj2, obj3) // {} refers to target and the rest is source.

const combineObject = { ...obj, ...obj2, ...obj3 } // Known as spread and combine all the object in combineObject
// console.log(combineObject);

const users = [ // 
    {
        id: 1,
        email: "h@google.com",
    },
    {
        id: 1,
        email: "h@google.com",
    },
    {
        id: 1,
        email: "h@google.com",
    },
    {
        id: 1,
        email: "h@google.com",
    },
    {
        id: 1,
        email: "h@google.com",
    },
    {
        id: 1,
        email: "h@google.com",
    },
] // Data come from database like this

users[1].email
// console.log(tinder);

// console.log(Object.keys(tinder)); // Gives as array and can be accessed as array
// console.log(Object.values(tinder)); // Gives as array 
// console.log(Object.entries(tinder)); // Gives as array under the array. Less usable

// console.log(tinder.hasOwnProperty("isLogged")); // Check the property is available or not?


const course = {
    coursename: "JS in hindi",
    price: 999,
    courseteacher: "Hitesh",
}

// console.log(course.courseteacher);
const { courseteacher: teacher } = course // courseteacher refers as teacher here known as de-structure

console.log(teacher);

// ***** Use in React de-structure*****
// const navbar = ({company}) => {
// }
// navbar(company = "Coder")

// ***** JSON *****
// {
//     "name": "Amos",
//     "coursename": "JS in hindi",
//     "price": "free"
// }

// JSON come as an array also
[
    {},
    {},
    {},
]

