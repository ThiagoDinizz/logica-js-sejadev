function soma (a,b){
  return a+b
}

function subtracao (a,b){
  return a - b
}

function calculadora(tipo){
  const a = 3
  const b = 3
  if (tipo === "soma") return soma(a,b)
  else if (tipo === "subtracao") return subtracao(a,b)
}

console.log(calculadora("soma"))


function par(num){
  return num % 2 ===0
  
}
const resultado = par(5)
console.log(resultado)

for(let i=0 ; i<= 100; i++){
  ///if (par(i)) console.log(i)
}
