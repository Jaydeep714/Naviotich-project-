let numberDisplay = document.getElementById("number");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");

let count = 0;

plusBtn.addEventListener("click", () => {
    count++;
    numberDisplay.textContent = count;
});

minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        numberDisplay.textContent = count;
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    numberDisplay.textContent = count;
});
