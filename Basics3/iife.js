// Immediately Invoke Function Expression 


function chai() {
    console.log("DB connect");
}

// chai()

// To remove the global variable polution
// It's a named IIFE
(function chai() {
    console.log(`DB connected`);
})(); // This is known as IIFE

// We have to stop IIFE with semicolon (;) because it gives us error if we don't use the semicolon
// Simple IIFE
(() => {
    console.log(`DB connected 2`); // Again gives error
})();

// Use it like a function
// Unnamed IIFE
((name) => {
    console.log(`DB connected 2 ${name}`); // Again gives error
})("Amos");
