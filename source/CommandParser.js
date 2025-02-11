class CommandParser{
    constructor(drone){
        this.parseCommand = function parseCommand(line){
            if(line == 'takeoff'){
                drone.onTakeOff()
                return true
            }
            if(line == 'land'){
                drone.onLand()
                return true
            }
            if(line.startWith('forward')){
                const [, dist] = line.split(" ")
                drone.onForward(dist)
                return true
            }
            if(line.startWith('back')){
                const [, dist] = line.split(" ")
                drone.onBack(dist)
                return true
            }
            if(line.startWith('right')){
                const [, dist] = line.split(" ")
                drone.onRight(dist)
                return true
            }
            if(line.startWith('left')){
                const [, dist] = line.split(" ")
                drone.onLeft(dist)
                return true
            }
            if(line == 'battery'){
                drone.onBattery(line)
                return true
            }
            if(line == 'flip'){
                drone.onFlip(line)
                return true
            }
            return false
        }
    }
}

module.exports = CommandParser

// o commandparser é o interpretador de comandos, é como se fosse um switch

//o constructor recebe todas as configurações