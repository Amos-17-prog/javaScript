const myNums = [1, 2, 3]

// const redNum = myNums.reduce(function (acc, currVal) {
//     console.log(`Accumulator value: ${acc} current Value: ${currVal}`);
//     return acc + currVal
// }, 0) // 0 is acc value cause acc doesnot know where to start

const redNum = myNums.reduce((acc, currentVal) => acc + currentVal, 0)

// console.log(redNum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999,
    },
    {
        itemName: "py course",
        price: 2999,
    },
    {
        itemName: "java couse",
        price: 7999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0) // This add all the price from the shopingCart

console.log(totalPrice);
