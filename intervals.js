let chiRhoImage;
let timerId;

function startMoving() {
    chiRhoImage = document.getElementById("chi-rho");
    timerId = setInterval(moveChirho,100000)
}

function moveChirho() {
    let left = parseInt(chiRhoImage.style.left);
    chiRhoImage.style.left = left + 5 + "px";
    if (left + chiRhoImage.width > document.body.clientWidth){
        chiRhoImage.style.left =  -10 + "px";
    }
}

// function rightMove(){
//     let right = parseInt(chiRhoImage.style.right);
//     chiRhoImage.style.right = document.body.clientWidth
// }

startMoving();
// clearInterval(timerId);

let countdownTimerId = null;  // stores unique identifier of interval timer
let number = document.getElementById("number");
let startbutton = document.getElementById("startbutton");
let stopbutton = document.getElementById("stopbutton");

function countdown() {
    let num = parseInt(number.value) - 1;
    if (num <= 0) {
        num = 0;
        startbutton.disabled = false;
        stopbutton.disabled = true;
        // stop countdown (countdownTimerId)
        clearInterval(countdownTimerId);

    }
    number.value = num;
}

startbutton.addEventListener("click", function() {
    startbutton.disabled = true;
    stopbutton.disabled = false;
    // start countdown using interval timer and store returned unique identifier
    countdownTimerId = setInterval(countdown, 1000);

});

stopbutton.addEventListener("click", function() {
    startbutton.disabled = false;
    stopbutton.disabled = true;
    // stop countdown (countdownTimerId)
    clearInterval(countdownTimerId);

});
