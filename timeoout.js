


function showSpecial() {
    let special = document.getElementById("special");
    special.style.display = "block";
}

setTimeout(showSpecial,2000);

let timeId = setTimeout(showSpecial,2000);
console.log(timeId);
clearInterval(timeId)

function hideSpecial(){
    let special = document.getElementById("special");
    special.style.display = "none";
    setTimeout(hideSpecial,3000)
}
hideSpecial();

// function startMoving() {
//     let special = document.getElementById("special");
//     let timerId = setInterval(moveText, 10)
// }
//
// function moveText() {
//     let special = document.getElementById("special");
//     special.style.left = 50 + "px";
// }
// startMoving();
// startMoving();

//
//  let timeoutToClear = setTimeout(() => {
//      let special = document.getElementById("special");
//      special.style.display = "block";
//  },
//      5000
//      )
//
// setTimeout(() => {
//     clearTimeout(timeoutToClear);
//     console.log("The first timeout has been cleared.");
// }, 3000);

