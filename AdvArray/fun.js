const myArray = []
// % DebugPrint(myArray)

// Continuous, Holey Array

// Path: test.js

// SMI (small integer)
// Packed elements
// Double (float, strings, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7")
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo); // [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holeys are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holeys. HOLEY_SMI_ELEMENTS

arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN) // PACKED_DOUBLE_ELEMENTS
arrSix.push(Infinity) // PACKED_DOUBLE_ELEMENTS

// for, for-of, forEach