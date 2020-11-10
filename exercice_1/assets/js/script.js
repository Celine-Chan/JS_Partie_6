// avec boucle for

function checkBissextile(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

const yearList = document.getElementById("yearList");

for (let year = 2020; year <= 2030; year++) {
    if (checkBissextile(year)) {
        yearList.innerHTML += `<li class="text-danger">${year}</li>`;
    } else {
        yearList.innerHTML += `<li>${year}</li>`;
    }
};

// for (let year = 2020; year <= 2030; year++) {
//     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//         yearList.innerHTML += `<li class="text-danger">${year}</li>`;
//     } else {
//         yearList.innerHTML += `<li>${year}</li>`;
//     }
// };
