const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

let obigatorio = 0
let facltativo = 0
let nEleitor = 0

for (let i of lista){
  if (i>=18 && i<=69)
    obigatorio +=1
  else if (i<16)
    nEleitor ++
  else facltativo +=1

  }

  console.log("Obrigatório: " + obigatorio + " -facultativo: "+ facltativo+ "Não Vota: "+nEleitor)