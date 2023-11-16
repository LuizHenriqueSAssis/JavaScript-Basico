const links = document.querySelectorAll('nav a');

function logHref(item) {
  const href = item.href;
  console.log(item);
}

links.forEach(logHref);

console.log(links);

const lista = ["JasvaScript","HTML","CSS"];

const ultimo = lista.pop();
const primeiro = lista.shift();

console.log(lista)
console.log(ultimo);
console.log(primeiro)