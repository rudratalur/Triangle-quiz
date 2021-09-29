const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#calculate-hypotenuse")
const outputEL = document.querySelector("#output");




function calculateSumOfSquares(a, b) {
    sumOfSquares = a ** 2 + b ** 2;
    return sumOfSquares
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value)
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    outputEL.innerText = "The length of Hypotenuse is " + hypotenuseLength;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)