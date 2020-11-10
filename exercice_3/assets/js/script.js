// for each

let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

const languagesTableList = document.getElementById("languagesList");

languages.forEach(element => languagesTableList.innerHTML += `<li>${element}</li>`);