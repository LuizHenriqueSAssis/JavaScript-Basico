const larguraTela = window.innerWidth;

/*function coordenada(event){
  const coordenadas = {
    x: event.x,
    y:event.y
  }
  console.log(coordenadas)
}

window.addEventListener('mousemove', coordenada);*/

function scroll(){
  console.log(window.scrollY);
}

window.addEventListener("scroll", scroll);
