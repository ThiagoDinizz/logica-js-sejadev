const array = [1, 5, 4, 9, 8, 0, 9, 5, 20]
/// const array= [1,5,4,3,10,7,8,20,12]

//forEach passa por todos pos elementos do array
array.forEach((eLemento, posicao) => {
 //console.log(`${eLemento} - posição ${posicao}`)
 // console.log(eLemento + " Na posição "+ posicao)
})

//find: Retorna o elemento
const valor = array.find((eLemento) => {
  //return eLemento === 9
  if (eLemento===9) return true
  return false

  //const valor = array.find((eLemento) => eLemento===9)
})

///console.log(valor)

//FindIndex retorna a posição

const index = array.findIndex((eLemento) => {
  //return eLemento === 9
  if (eLemento===9) return true
  return false
})

//console.log(index)


//some retorna true se pelo menos um numero satisfazer a condição

const some = array.some((eLemento) => {
  //return eLemento >= 21
    if(eLemento>= 21 ) return true

  return false
})

//console.log(some)


//every:  retorna true se todos os número satisfazerem a condição
const every = array.every((eLemento) => {
  //return eLemento >= 1
  if(eLemento>= 1 ) return true
  return false
})
//const every = array.every((eLemento)=> eLemento >=0)

console.log(every)