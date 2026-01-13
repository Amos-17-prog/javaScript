// document.getElementById("men").onclick = function () { 
//     alert("Owl clicked")
// } // This give less feature

// attachEvent() // this is an old approach
// jQuery - on()

// type, timeStamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// Event propagation have two context eventBubbling, eventCapturing
// document.getElementById("images").addEventListener("click", (e) => {
//     console.log(`Clicked inside the ul`);
// }, false) // false is default value

// Event Bubbling
// document.getElementById("images").addEventListener("click", (e) => {
//     console.log(`Clicked inside the ul`);
// }, false) // false is default value

// document.getElementById("men").addEventListener("click", (e) => {
//     console.log(`Men clicked`);
// }, false) // first men clicked then clicked inside the ul

// Event Capturing Mode
// document.getElementById("images").addEventListener("click", (e) => {
//     console.log(`Clicked inside the ul`);
// }, true)

// document.getElementById("men").addEventListener("click", (e) => {
//     console.log(`Men clicked`);
//     e.stopPropagation()
// }, true) // In capturing, clicked inside the ul and then men clicked

// document.getElementById("google").addEventListener("click", (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)

document.querySelector("#images").addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
        console.log(e.target.id);

        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // removeIt.parentNode.removeChild(removeIt)
}, false)
