// forEach

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

const languagesTableList = document.getElementById("languageTBody");

// languages.forEach(element => {
    
//     let tableTr = document.createElement("tr");
//     tableTr.innerHTML = `<td>${element}</td>`;
//     languagesTableList.appendChild(tableTr)

// });


languages.forEach(element => languagesTableList.innerHTML += `<tr><td>${element}</td></tr>`);
