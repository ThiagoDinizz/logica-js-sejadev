const API_URL = 'https://jsonplaceholder.typicode.com/comments'

async function getComments (postId){
  const response = await fetch(API_URL)
  const data = await response.json()
  const filtred = data.filter((obj)=> {return obj.postId === postId})
  console.log(filtred)
}

getComments(1)
