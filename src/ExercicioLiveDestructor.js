const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function users (){
	const response = await fetch(API_URL)
  const data = await response.json()
  
  
  
  function fulladress({address}){
  return `Ruas:${address.street} Bairro:${address.suite} Cidade:${address.city} Código:${address.zipcode} Latidade:${address.geo.lat} Longitude:${address.geo.lng}`
  }
  
  const variavel = data.map((parametros)=>{
  return {...parametros, FullAddress: fulladress(parametros), username: `@${parametros.username}`
  
  }
  })
     
console.log(variavel)
 
  
}
users()