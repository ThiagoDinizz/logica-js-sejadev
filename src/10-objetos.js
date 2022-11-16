const pessoa = {
  nome:"Thiago", 
  idade: 29, 
  casado:true,
  notas: [5,10,130],
  endereco: {
    rua: "Rua xyz",
    numero: 362
  }
}

console.log(pessoa["nome"])
console.log(pessoa.nome)

console.log(pessoa["idade"])
console.log(pessoa.idade)

console.log(pessoa["casado"])
console.log(pessoa.casado)

console.log(pessoa["notas"][2])
console.log(pessoa.notas[2])

console.log(pessoa["endereco"]["rua"])
console.log(pessoa.endereco.rua)


