const lista = ["JavaScript", 20, true];

const body = document.querySelector("body");

for (let index = 0; index < lista.length; index++){
  console.log(lista[index]);
  body.innerHTML += "<p>" + lista[index] +  "</p>";
}