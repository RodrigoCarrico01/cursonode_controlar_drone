const readline = require('readline')
const { createSocket } = require('dgram')
const CommandParser = require('./CommandParser')
const Commander = require('./Commander')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const TELLO_CMD_PORT = 8889 //port default dos drones do DJI TELLO
const TELLO_HOST = '192.168.10.1' //host default dos drones do DJI TELLO

const getSocket = ()=> {
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new CommandParser({
        onTakeoff: async () => {await cmder.sendTakeoff()},
        onLand: async () => {await cmder.sendLand()},
        onForward: async (dist) => {await cmder.sendForward(dist)},
        onBack: async (dist) => {await cmder.sendBack(dist)},
        onRight: async (dist) => {await cmder.sendRight(dist)},
        onLeft: async (dist) => {await cmder.sendLeft(dist)},
        onCw: async (dist) => {await cmder.sendCw(dist)}, //sentido do relógio
        onCcw: async (dist) => {await cmder.sendCcw(dist)}, //sentido contrário do relógio
        onFlip: async () => {await cmder.sendFlip()},
        onBattery: async () => {await cmder.getBattery()}
    })
    console.log(`A iniciar!`)
    socket.on('message', (msg)=>{
        console.log(`DJI tello: ${msg.toString()}`)
    })
    socket.on('error', (err)=>{
        console.log(`DJI tello ERROR: ${err}`)
    })
    socket.on('listening', ()=>{
        console.log(`Socket is listening!`)
    })
    console.log('Enter a command:')
    rl.on('line',(line)=>{
        if(!cmdp.parseCommand(line)){
            if(line == 'exit'){
                console.log('Bye')
                process.exit(0)
            }
            console.log('Not a valid command')
        }
    })
})()

//este une todos os comandos do drone do parser e commander