/*
================ hours all properties selectors      =================
*/

const hourInput = document.querySelector(".hourInput");
const startBtn = document.querySelector(".start");
const endBtn = document.querySelector(".end");
const reset = document.querySelector(".reset");
const time = document.querySelector(".time");

/*
================ hours all properties selectors      =================
*/

let hours;
let stopinterval;

hourInput.addEventListener("change", function (e) {
    if (isNaN(e.target.value)) {
        return;
    } else {
        hours = e.target.value;
    }
});
startBtn.addEventListener("click", function () {
    if (hours) {
        start();
    }
});
endBtn.addEventListener("click", function () {
    stop();
});

reset.addEventListener("click", function () {
    hourInput.value = 0;
    stop();
    time.innerHTML = "00";
});
function counDown() {
    --hours;
    time.innerHTML = hours;
    if (hours == 0) {
        clearInterval(stopinterval);
    }
}
function start() {
    stopinterval = setInterval(() => {
        counDown();
    }, 1000);
}
function stop() {
    clearInterval(stopinterval);
}
