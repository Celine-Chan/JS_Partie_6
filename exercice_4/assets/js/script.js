// forEach

let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

const daysTableList = document.getElementById("daysTBody");

days.forEach(element => daysTableList.innerHTML += `<tr><td>${element}</tr></td>` {
    
});