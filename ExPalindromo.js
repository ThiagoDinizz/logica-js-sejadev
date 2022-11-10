/**
 * 1)Crie uma função que verifica se a palavra é palindromo.
 * toLowerCase()
 * toUpperCase()
 * funções de array
 * .map
 * .filter
 * .reduce
 * .forEach
 * .reverse()
 * Não é possível comparar arrays no js
 * .join
 * 
 */


const checkPalindromo = (palavra) =>{
  const pMinusculo = palavra.toLowerCase()
  const pArray = pMinusculo.split('').reverse()
  console.log(pArray)
  const verificacao = pArray.join('') === pMinusculo

  console.log(pMinusculo)
  console.log(pArray.join(''))  
  console.log(verificacao)
}

checkPalindromo("Pedro")
