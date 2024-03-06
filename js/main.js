/*
================ hours all properties selectors      =================
*/

const hourInput = document.querySelector(".hourInput");
const startBtn = document.querySelector(".start");
const endBtn = document.querySelector(".end");
const time = document.querySelector(".time");

/*
================ hours all properties selectors      =================
*/
/*
================ minute all properties selectors      =================
*/
const minuteInput = document.querySelector(".minuteInput");
const start2 = document.querySelector(".start2");
const end2 = document.querySelector(".end2");
const minuteTime = document.querySelector(".minutetime");

/*
================ minute all properties selectors      =================
*/
// ============= hour function
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
    if (hours <= 24) {
        start();
    }
});
endBtn.addEventListener("click", function () {
    stop();
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
// ============= minute function
let minute;
let stopintervalTwo;

minuteInput.addEventListener("change", function (e) {
    if (isNaN(e.target.value)) {
        return;
    } else {
        minute = e.target.value;
    }
});
start2.addEventListener("click", function () {
    if (minute <= 60) {
        startTwo();
    }
});
end2.addEventListener("click", function () {
    stopTwo();
});

function counDownTwo() {
    --minute;
    minuteTime.innerHTML = minute;
    if (minute == 0) {
        clearInterval(stopintervalTwo);
    }
}
function startTwo() {
    stopintervalTwo = setInterval(() => {
        counDownTwo();
    }, 600);
}
function stopTwo() {
    clearInterval(stopintervalTwo);
}
