const person = {
  nome: 'José',
  lastName: 'Silva'
}

// object.keys() cria um array com todas as chaves do objeto
//console.log(Object.keys(person))

//object.values() cria um array com todas os valores do objeto
//console.log(Object.values(person))

//object.entries() cria um array com um array de objetos e valores
//const array = Object.entries(person)
/*
// [['name', 'José'], ['lastName', 'Silva'], ['age', '20']]
 */

const livros = {
  'livroA' : 19.90,
  'LIVROb': 97.00,
  'lIVROC': 20.00
}

const values = Object.values(livros)

const sum = values.reduce((val, acc) => val + acc, 0)

console.log(sum)