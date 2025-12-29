// for

let myArray = ["Spiderman", "Thor", "Ironman", "Batman"]

for (let i = 0; i < 10; i++) {
    const element = i; // assign arrays value in element 
    if (element == 7) {
        // console.log("7 is best number")
    }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    // const element = i;
    // console.log(`Outer loop ${i}`);

    for (let j = 1; j <= 10; j++) {
        // const element = j;
        // console.log(`Inner loop ${j} and inner loop ${i}`)
        // console.log(`${i}*${j} = ` + i * j);
    }

}

// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);

}

// break and continue

for (let i = 1; i <= 20; i++) {
    // const element = i;
    if (i == 7) {
        // console.log(`Detected 7`);
        break; // Does not print 7 break after 6
    }
    // console.log(`Value of i is: ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    // const element = i;
    if (i == 7) {
        console.log(`Detected 7`);
        continue // Skip 7 for once
    }
    console.log(`Value of i is: ${i}`);
    
}