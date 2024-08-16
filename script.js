var timer = 10;
var score = 0;
var hitRn = 0;


function bubble() {

    var clutter = "";
    for (var i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function timeSet() {

    var timeInternal = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerChange").textContent = timer;
        }
        else {
            clearInterval(timeInternal)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
            document.querySelector("#pbtm").innerHTML = `<h1>🫵 Tera Score hai - ${score}</h1>`;
        }
    }, 1000);
}

function getHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#getHitValue").innerHTML = hitRn;
}

function scoreUpdate() {
    score += 10;
    document.querySelector("#scoreUpdate").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitRn) {
        scoreUpdate();
        bubble();
        getHit();
    }
})

bubble();
timeSet();
getHit();