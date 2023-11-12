/*function livro(nome, ano , autor){
  const nomeMaior = nome.toUpperCase();
  const total = 2050 - ano;
  const frase =  nome + "por" + autor ;
  const objeto = {
    nome: nomeMaior , 
    total,
    frase
  }
return objeto;
}
*/

function livro(nome, ano , autor){
 
return{
  nome:  nome.toUpperCase() , 
  total: 2050 - ano,
  frase: nome + "por" + autor
};
}

const livroRetorno = livro('O Senhor dos Anes', 1954, 'J.R.R. Tolkien');

console.log(livroRetorno.frase);