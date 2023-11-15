const soma = document.querySelector('#soma');
const valor = document.querySelector('#valor')

function somarAoClick(somar){
  
  if(valor.innerText < 10){  
    const total = Number(valor.innerText) + 1;
    valor.innerText = total
   console.log(total)
  }else{
    valor.innerText = 'Error'
    console.log('Error')
  }

}
if(soma){
  soma.addEventListener('click', somarAoClick);
}
 