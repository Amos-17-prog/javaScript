// Date 

let myDate = new Date()
// console.log(myDate) // 2025-12-12T15:24:02.505Z
// console.log(myDate.toString()); // Fri Dec 12 2025 15:22:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri Dec 12 2025
// console.log(myDate.toISOString()); // 2025-12-12T15:22:21.573Z
// console.log(myDate.toJSON()); // 2025-12-12T15:22:21.573Z
// console.log(myDate.toLocaleDateString()); // 12/12/2025
// console.log(myDate.toLocaleString()); // 12/12/2025, 3:22:21 PM
// console.log(myDate.toTimeString()); // 15:22:21 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2025, 0, 25) // Month start from 0 instead of 1 and so on.
// let myCreatedDate = new Date(2025, 0, 25, 21, 2) // Time start from 0 to 24.
// let myCreatedDate = new Date("2003-10-16") // Now here month Start from 1 to 12
let myCreatedDate = new Date("10-16-2003")
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    
})