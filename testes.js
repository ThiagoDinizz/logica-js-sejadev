/**let newArray= [10, 20, 30.5]
console.log(newArray.length) // tamanho do array

let i = 0

while(i < newArray.length){
  console.log(newArray[i])
  i++
}


let num = 0

while (num<=10){
  if (num%2===0){
  console.log(num)}
  num++
}
console.log("Aqui")


const divisor = 13
const num1= 13
const equacao = num1%divisor

equacao ===0? console.log("É divisível"): console.log("Não divisível")

const numDias = 70
const numMes = Math.floor(numDias/30)
const contDias = numDias%30

console.log("Mês "+ numMes)
console.log("Dia "+ contDias)*/

const array = [1, 5, 4, 9, 8, 0, 9, 5, 20]
/// const array= [1,5,4,3,10,7,8,20,12]

//forEach passa por todos pos elementos do array
array.forEach((eLemento, posicao) => {
 //console.log(`${eLemento} - posição ${posicao}`)
  //console.log(eLemento + " Na posição "+ posicao)
})

for(let i=0; i< array.length; i++){
  //{console.log(array[i])
}

const valor = array.find((eLemento) => {
  //return eLemento === 9
  return eLemento===100


})

///console.log(valor)


const some = array.some((eLemento)=>{
  return eLemento === 5 // >= 50
  
})
///console.log(some)

const every = array.every((eLemento)=> eLemento >=0)
//console.log(every)

const pessoa = {
  nome: "Thiago",
  sobrenome: "Pereira",
  idade: 29,
  senha: "457"
}

const {nome, sobrenome, senha, } = pessoa

//console.log(pessoa.sobrenome)



const API_URL = 'https://jsonplaceholder.typicode.com/comments'

async function getComments (postId){
  const response = await fetch(API_URL)
  const data = await response.json()
  const filtred = data.filtred((obj)=>{
    return obj.postId ===postId 

  })
  //console.log(filtred)
}

getComments(1)


const APII_URL = 'https://jsonplaceholder.typicode.com/users'

async function main(){
  const response = await fetch(APII_URL)
  const dataa = reponse.json()
  //console.log(data)
}


const usuario ={
  nome:'Thiago',
  sobrenome: 'Diniz'
}

function fullName(nome, sobrenome){
  return `${nome} ${sobrenome}`
}

const nomecompleto = fullName(usuario.nome, usuario.sobrenome)

console.log(nomecompleto)

//------------------------------------------------------------------------

const usuario = {
	nome:" Thiago",
  sobrenome: "Diniz"
}

function fullName({nome, sobrenome}){
	return `${nome} ${sobrenome} `
}

const nomeCompleto = fullName(usuario)
console.log(nomeCompleto)


//-----------------------------------------------------------

const users = [
  {
  id:1,
  nome: "Thiago",
  sobrenome: "Diniz",
  email: "thiago@sejadev",
  idade:29
  },
  {
  id:1,
  nome: "Pedro",
  sobrenome: "Henrique",
  email: "pedro@sejadev",
  idade:31
  }
  ]
  
  function fullName({nome, sobrenome}){
    return `${nome} ${sobrenome} `
  }
  
  const newUSers = users.map((user)=>{
    //return fullName(user)
    return {...users, nomeCompleto: fullName(user)}
  })
  console.log(newUSers)

  //-------------------------------------------------

  const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function users (){
	const response = await fetch(API_URL)
  const data = await response.json()
  
  const map = data.map(({email,phone})=>{
   return email, phone
   })
  console.log(map)
}
users()