const pessoa = {
  nome: "Thiago",
  sobrenome: "Pereira",
  idade: 29,
  senha: "457"
}

/*const nome = pessoa.nome
const sobrenome = pessoa.sobrenome
const idade = pessoa.idade

console.log(nome)*/

const{ nome, idade } = pessoa
// cosnt nome = pessoa.nome
// const idade = pessoa.idade
console.log(nome)
console.log(idade)

const pessoaAtualizada = {
  ...pessoa,
  idade: 30,
  senha: "879"
}

//console.log(pessoaAtualizada.idade)


const array = [10, 200, 3 ,4]
const [a , d]= array
console.log(a)
console.log(d)


//const array = [10, 200, 3 ,4]

const newArray = [0, ...array, 5 ]
//console.log(newArray)
