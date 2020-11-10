// avec boucle for

// const numberList = document.getElementById("numberList");

for (let number = 0; number <= 100; number++) {
        if (number % 15 == 0) {
            numberList.innerHTML += `<li>...</li>`;
        } else {
            numberList.innerHTML += `<li>${number}</li>`;
        }
    };