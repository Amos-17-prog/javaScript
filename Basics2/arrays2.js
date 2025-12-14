const marvelHeroes = ["Thor", "IronMan", "AntMan"]
const dcHeroes = ["Batman", "SuperMan", "Flash"]

// marvelHeroes.push(dcHeroes) // This includes dcHeroes in marvelHeroes as fourth element

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][0]);

// const arr = marvelHeroes.concat(dcHeroes) // concat combine arrays into a single array
// console.log(arr);

// const allNewHeroes = [...marvelHeroes, ...dcHeroes] // This is also combine arrays into a single array known as spread like we drop the glass it spread all in the floor
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 6, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) // This combine into single arrays from in depth
console.log(realAnotherArray);


console.log(Array.isArray("Coder"))
console.log(Array.from("Coder")) // from converts into array from object, string, 
console.log(Array.from({ name: "Amos" })) // Its asks to which part is converted into array like keys or value if you can't tell properly it gives the empty array

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)); // [100, 200, 300]
