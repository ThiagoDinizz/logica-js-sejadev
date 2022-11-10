const numbers = [5,9,7,6,9,2]
let num = 0
let p = 0

for(let i of numbers){
  num = num + i
  p++

}
let cont = num/p

let valor = num/ numbers.length

console.log(cont)

console.log(valor)
