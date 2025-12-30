let i = 0;

while (i <= 10) {
    // console.log(`Value of index is ${i}`);
    i = i + 2;
}


let myArray = ["Ironman", "CaptainAmerica", "Thor", "Hulk", "Clint", "BlackWidow"];
let index = 0;
while (index < myArray.length) {
    // console.log(`OG heroes are: ${myArray[index]}`);
    index = index + 1;
}


let score = 0;
do { // Do while at least print once
    console.log(`Value of i is : ${score}`);
    score++
} while (score<=10);