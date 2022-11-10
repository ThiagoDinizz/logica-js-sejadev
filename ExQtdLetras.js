const frase = "E quero ser desesenvolvedor profiçççsssçional"

const contador = {}

function verifyQt (frase) {
  const fraseMin = frase.toLowerCase()
  const fraseArray = fraseMin.split('')
  
  for (let c of fraseArray)
  
    fraseArray.foreach((letra)=>{

      if(letra === c){
        contador.c ? contador.c++ : contador.c = 1
      }
    })
  } 
  

  console.log(contador)
}

verifyQt("Eu quero")