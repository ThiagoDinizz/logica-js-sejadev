const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
  const response = await fetch(API_URL)
  const data = await response.json()
  
  //data.forEach((eLemento)=>{return console.log(eLemento)})
  
 const userEmails = data.map((obj)=>{
 return {
 		email: obj.email
 }
 })
 console.log(userEmails)
}

getUsers()