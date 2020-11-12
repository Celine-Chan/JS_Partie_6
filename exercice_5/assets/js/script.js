// boucle while

let firstNumber = 5;
let secondNumber = 4;
let resultat = 0;
let addResultat = document.getElementById("showResultat");

function numberResultat() {
    resultat = firstNumber * secondNumber;
    secondNumber = resultat;
    return resultat;
}


while (numberResultat() < 250) {
    addResultat.innerHTML += `<li>${resultat}</li>`;
    console.log(resultat);
}