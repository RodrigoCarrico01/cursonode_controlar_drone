const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é a melhor marca de drones do mundo?',(anwser)=>{
    console.log(`A melhor marca de drones é: ${anwser}`)
     switch(anwser){
        case "command":
            console.log("A ligar o drone.")
            break;
        case "takeoff":
            console.log("A decolar o drone.")
            break;
        default:
            console.log("Liga o drone!!!")
             
     }

    rl.close()
})


// este teste é importante porquê?
// isto mostra como o cli responde
// nós escrevemos um determinado comando no terminal 
// e o código reage 