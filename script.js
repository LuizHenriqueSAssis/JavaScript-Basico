const ativar = document.querySelector('.ativar');

function ativarAoClick(event) {
  console.log(event.timeStamp); 
}

ativar.addEventListener('click', ativarAoClick)

console.log(ativar)