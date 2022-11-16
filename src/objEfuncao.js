const usuario = {
	nome:" Thiago",
  sobrenome: "Diniz"
}

function fullName(user){
	return `${user.nome} ${user.sobrenome} `
}

const nomeCompleto = fullName(usuario)
console.log(nomeCompleto)


//Destructor

function fullName2 ({nome, sobrenome}){
	return `${nome} ${sobrenome} `
}

const nomeCompleto2 = fullName2(usuario)
console.log(nomeCompleto2)