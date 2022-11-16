function Pessoa (nome, sobrenome){
  let pessoa = {
    nome,
    sobrenome
  } 

  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}
const PessoaA = Pessoa("Thiago", "Diniz")
const PessoaB = Pessoa("Pedro", "Henrique")

console.log(PessoaA, PessoaB)
console.log(PessoaA.nomeCompleto)
console.log(PessoaA.nomeCompleto + PessoaA)
console.log("NomeCompleto")

