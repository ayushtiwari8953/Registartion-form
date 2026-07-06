// let count = 0;

// let countValue = document.getElementById("count");

// let incBtn = document.getElementById("inc");
// let decBtn = document.getElementById("dec");
// let resetBtn = document.getElementById("reset");

// incBtn.addEventListener("click", function () {
//     count++;
//     countValue.innerText = count;
// });

// decBtn.addEventListener("click", function () {
//     count--;
//     countValue.innerText = count;
// });

// resetBtn.addEventListener("click", function () {
//     count = 0;
//     countValue.innerText = count;
// });



let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrement() {
    count--;
    document.getElementById("count").innerText = count;
}

function resetCounter() {
    count = 0;
    document.getElementById("count").innerText = count;
}