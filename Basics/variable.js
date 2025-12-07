// It all assign the value in memory 
const accountId = 18691 // Constant that cannot be change even if you want 
let accountEmail = "tharuamos@gmail.com" 
var accountPassword = "12345" 
accountCity = "Kathmandu" 
let accountState; 

// accountId = 2  // Not allowed 
accountEmail = "Kahosheh@gmail.com" 
accountPassword = "34763" 
accountCity = "Butwal" 

console.log(accountId); 

/* Prefer Not to use var Because of issue in block scope and fuctional scope */ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
