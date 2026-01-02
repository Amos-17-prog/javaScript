// const coding = ["Python", "CPP", "JS", "Java", "Ruby", "PHP"]

// const values = coding.forEach((item) => {
//     console.log(item); 
// })

// const values = coding.forEach((item) => {
//     console.log(item); 
//     return item
// })

// console.log(values); // undefined, because forEach doesnot return any value 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// In filter, there is a callback fn which access each value, but we have to give the ccondition
// const retNum = myNums.filter((num) => num > 5) // greater numbers than 5

// const retNum = myNums.filter((num) => {
//      return num > 5
// }) // if we write scope then we've to write return keywords

// console.log(retNum);

// const newNums = []

// myNums.forEach((num) => { 
//     if (num>5) {
//         newNums.push(num)
//     }
// }) // works as same as filter

// console.log(newNums);


const books = [
    { title: "Book one", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Eight", genre: "Non-Fiction", publish: 1981, edition: 1989 },
]

const userBooks = books.filter((bks) => {
    // return bks.genre === "History"; // This give only books whose genre is history
    return bks.publish > 1995 && bks.genre === "History" ; // This give only books whose genre is history
})

console.log(userBooks);

