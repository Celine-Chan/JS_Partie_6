// forEach

let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

const daysTableList = document.getElementById("daysTBody");

days.forEach(element => { 

    let addTr = document.createElement("tr");
    addTr.classList.add("text-uppercase");
    if (element == "Samedi" || element == "Dimanche") {
        addTr.classList.add("font-weight-bold");
    } 

    addTr.textContent = element;
    daysTBody.appendChild(addTr);
});