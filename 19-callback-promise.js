function upload (){
  return new Promise((Resolve)=>{
    setTimeout(()=>{
      console.log("02 - UPLOAD CONCLUIDO")
      Resolve()
    },2000)//Tempo em mls
    
  })
  }
  
  async function uploadDeFoto(){
    console.log("01- INCIANDO UPLOAD")
    await upload()
    console.log("03 - EXECUÇÃO FINALIZADA")
  }
  
  uploadDeFoto()