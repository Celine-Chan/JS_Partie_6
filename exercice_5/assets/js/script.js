// boucle while

let firstNumber = 2;
let secondNumber = 5;
let result = 0;
let addResult = document.getElementById("showResult");

function numberResult() {
    result = firstNumber * secondNumber;
    secondNumber = result;
    return result;
}

while (numberResult() < 250) {
    addResult.innerHTML += `<li>${result}</li>`;
    console.log(result);
}