function temporizador(){
  return new Promise((resolve, reject)=>{
    resolve("FINALIZOU")

  })
}

function main (){
  console.log("1")

  setTimeout(()=>{
    console.log('2')
  },1000)

  const tempo= temporizador()
}

main()