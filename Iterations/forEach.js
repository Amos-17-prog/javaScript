const coding = ["Python", "CPP", "JS", "Java", "Ruby", "PHP"]

// coding.forEach(function (item) {
//     console.log(item); // prints all the arrays
// }) // Callback fn doesnot have name

// coding.forEach((value) => {
//     console.log(value); // prints all the arrays
// }) // Callback fn doesnot have name

function printme(item) {
    // console.log(item);
}

// coding.forEach(printme); // Need only reference

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCode = [
    {
        languageName: "JavaScript",
        langfile: "JS"
    },
    {
        languageName: "C prog",
        langfile: "C"
    },
    {
        languageName: "python",
        langfile: "py"
    },
]

myCode.forEach((key) => {
    // console.log(key); // prints all the objects using foreach loops
    console.log(key.languageName); // prints all the object's languageName only
    console.log(key.langfile); // prints all the object's filename
})