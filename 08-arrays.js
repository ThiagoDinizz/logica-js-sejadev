/*let variavel = 10
let array = [true, true, 0, 1, 2, "string", 'sejadev', variavel]
//            0     1    2  3  4      5         6         7         8

console.log(array[0])  

array[8] = 1000 //alterando array ou incrementando

console.log(array)  

array.push(1000,"string")// adicionando através do push. Os dados(1000 e string) serão adicionados na útilma posição

array.pop() // removendo o último elemento


let newArray= [10, 20, 30]
console.log(newArray.length) // tamanho do array

let i = 0

//neste caso, ele varre o array retornando a posição e o valor
while(i < newArray.length){
  console.log(newArray[i])
  i++
}
//neste caso, ele varre o array retornando a posição 
for(let i=0; i< newArray.length; i++){
  console.log(newArray[i])
}

*/

//for..in

let newArray= [10, 20, 30]

for(let i in newArray){
  console.log(i) //Posição
  console.log(newArray[i]) //Valor
}

//for..of Já acessa direto os valres do array
for (let i of newArray){
  console.log(i) //Pega os valores

}