/*function fatorial (n){
  let i = n
  let fatorial = 1
  while(i>=2){
    fatorial = fatorial*i
    i--
  }
  return fatorial
}

let number = 5
  
const resposta = fatorial(number)
console.log(resposta)*/


function fatorial (n){
  i= 1
  if (n <=2) return n
  return fatorial(n-1) *n
}
 let resposta = 5
 console.log(fatorial(resposta))

