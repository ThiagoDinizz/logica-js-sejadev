const newArray = [1,2,3,4,5]

// splice fatia o array (1° elemento é o inicio, 2°qtde de elementos)
//console.log(newArray.splice(2,4))


//map: alterar os valores dentro do array seguindo uma regra
//const map = newArray.map((eLemento) => {return eLemento*2} )
//console.log(map)

//filter: Filter vai filtrar os elemntos dentro do array
const filter = newArray.filter((elemento)=> {
  if (elemento % 2 === 0) return elemento
})
//console.log(filter)


// reduce: reduz o array para algum outro elemento,

console.log(newArray.reduce((acumulado, elemento)=>{
  return acumulado - elemento
}, 100 // -> acumulado inicial
))