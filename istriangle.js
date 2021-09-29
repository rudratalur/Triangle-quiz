const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#Is-Triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}

function isTriangle() {
    const sumOfAngle = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if (sumOfAngle === 180) {
        outputEl.innerText = "Yay, It forms a triangle" 
    }
    else {
        outputEl.innerText = "Oops! it doesnt forms a triangle"
    }

}

isTriangleBtn.addEventListener("click", isTriangle)