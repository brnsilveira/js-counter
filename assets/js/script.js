let currentNumberWrapper = document.getElementById("currentNumber");
let  counter = 0;

function add() {
    counter++;

    if(counter >= 0) {
        currentNumberWrapper.style.color = "#ededed";
    }

    currentNumberWrapper.innerHTML = counter;
}

function sub() {
    counter--;

    if(counter < 0) {
        currentNumberWrapper.style.color = "red";
    }

    currentNumberWrapper.innerHTML = counter;
}

const increment_button = document.getElementById("increment");
const decrement_button = document.getElementById("decrement");

increment_button.addEventListener("click", add, false);
decrement_button.addEventListener("click", sub, false);
