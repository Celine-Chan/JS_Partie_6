// boucle while

let firstNumber = 8;
let secondNumber = 2;
let result = 0;
let addResult = document.getElementById("showResult");

function numberResult() {
    result = firstNumber / secondNumber;
    firstNumber = result;
    return result;
}

while (numberResult() > 1) {
    addResult.innerHTML += `<li>${result}</li>`;
    console.log(result);
}