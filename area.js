const lengthOfSides = document.querySelectorAll(".input-length");
const areaBtn = document.querySelector("#area-Btn");
const outputEl = document.querySelector("#output");

function productOfLength(a,b) {
    inputProduct = a*b;
    console.log(inputProduct)
   return inputProduct;
}
function calculateLength() {
    const inputProduct = productOfLength(Number(lengthOfSides[0].value), Number(lengthOfSides[0].value));
    const area = ((1/2)*(Number(lengthOfSides[0].value)*(Number(lengthOfSides[1].value))))
    outputEl.innerText = "The area of Triangle is " + area;
    
}

areaBtn.addEventListener("click", calculateLength)