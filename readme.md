# ENGLISH

# NodeJS Course - DJI Tello Drone

This project is a Node.js application designed to control the DJI Tello drone using commands sent via a Command Line Interface (CLI). The drone acts as a Wi-Fi access point, allowing us to connect and interact directly with it.

## Features
- Full control of the DJI Tello drone with simple commands.
- Connection through the UDP protocol.
- Battery status check, takeoff, landing, and directional movement commands.

---

## Requirements
- [Node.js](https://nodejs.org/)
- DJI Tello drone (model reference: [Tello Series](https://store.dji.com/pt/shop/tello-series))

---

## How It Works

1. **Power on the drone:** Press the side button on the drone until the light turns on.
2. **Connect to Wi-Fi:** Once the light is on, the drone will create a Wi-Fi network called `tello.xxxxx`. Connect your computer to this network.
3. **Run the application:**
   ```bash
   node source/init.js
   ```
4. **Enter commands:** Type commands into the terminal to control the drone.

---

## Available Commands

| Command       | Description                                   |
|---------------|-----------------------------------------------|
| `takeoff`     | Makes the drone take off                      |
| `land`        | Lands the drone safely                        |
| `battery`     | Checks the battery level                      |
| `forward X`   | Moves forward by X centimeters                |
| `back X`      | Moves backward by X centimeters               |
| `right X`     | Moves right by X centimeters                  |
| `left X`      | Moves left by X centimeters                   |
| `cw X`        | Rotates X degrees clockwise                   |
| `ccw X`       | Rotates X degrees counterclockwise            |
| `flip`        | Performs a basic flip maneuver                |

**Note:** The drone will automatically land if the battery level drops below 5%.

---

## Flight and Landing Guide

1. Start the application:
   ```
   node source/init.js
   ```
2. Check the battery level:
   ```
   battery
   ```
3. Take off:
   ```
   takeoff
   ```
4. Control the drone using movement commands, for example:
   ```
   forward 50  # Move forward 50 cm
   left 30     # Move 30 cm to the left
   cw 90       # Rotate 90 degrees clockwise
   ```
5. Land the drone:
   ```
   land
   ```

---

## Project Structure

```
source/
├── init.js           # Application entry point
├── CommandParser.js  # Parses user input commands
├── Commander.js      # Sends the appropriate commands to the drone
```

- **init.js:** Initializes the application and establishes communication with the drone.
- **CommandParser.js:** Interprets user-entered commands.
- **Commander.js:** Handles sending commands to the drone using UDP.

---

## Technical Notes
- The drone communicates using UDP on port `8889` with the IP address `192.168.10.1`.
- The application handles connection errors and provides real-time feedback from the drone.

---

## Example Execution
When the application starts, you will see:
```
Starting up!
Socket is listening!
Enter a command:
```

From this point, you can input any of the available commands to control the drone.

---

## Warning
Ensure the drone has sufficient battery before taking off. The drone will automatically land when the battery level falls below 5%.

---

____________________________________________________________

# PORTUGUÊS

# NodeJS Course - DJI Tello Drone

Este projeto consiste numa aplicação Node.js para controlar o drone DJI Tello através de comandos enviados por uma interface de linha de comandos (CLI). O drone funciona como um ponto de acesso Wi-Fi, ao qual nos conectamos para interagir diretamente com ele.

## Características
- Controlo total do drone DJI Tello através de comandos simples.
- Conexão via protocolo UDP.
- Verificação da bateria, decolagem, aterragem e movimentos diretos.

---

## Pré-requisitos
- [Node.js](https://nodejs.org/)
- Drone DJI Tello (conforme o modelo: [Tello Series](https://store.dji.com/pt/shop/tello-series))

---

## Como Funciona

1. **Ligar o drone:** Carregar no botão lateral do drone até a luz acender.
2. **Conectar ao Wi-Fi:** Após a luz acender, o drone cria uma rede Wi-Fi com o nome `tello.xxxxx`. Conecte o seu computador a essa rede.
3. **Executar a aplicação:**
   ```bash
   node source/init.js
   ```
4. **Enviar comandos:** Insira comandos através do terminal para controlar o drone.

---

## Comandos Disponíveis

| Comando      | Descrição                                      |
|--------------|------------------------------------------------|
| `takeoff`    | Decolar o drone                                |
| `land`       | Aterrar o drone                                |
| `battery`    | Verificar o nível da bateria                   |
| `forward X`  | Avançar X centímetros                          |
| `back X`     | Recuar X centímetros                           |
| `right X`    | Mover para a direita X centímetros             |
| `left X`     | Mover para a esquerda X centímetros            |
| `cw X`       | Rotacionar no sentido horário X graus          |
| `ccw X`      | Rotacionar no sentido anti-horário X graus     |
| `flip`       | Realizar um movimento flip básico              |


**Nota:** O drone pousará automaticamente se a bateria estiver abaixo de 5%.

---

## Passo a Passo: Voar e Pousar o Drone

1. Iniciar a aplicação com o comando:
   ```
   node source/init.js
   ```
2. Verificar o nível da bateria:
   ```
   battery
   ```
3. Decolar o drone:
   ```
   takeoff
   ```
4. Controlar os movimentos do drone conforme desejado, por exemplo:
   ```
   forward 50  # Avançar 50 cm
   left 30     # Mover 30 cm para a esquerda
   cw 90       # Rodar 90 graus no sentido horário
   ```
5. Pousar o drone:
   ```
   land
   ```

---

## Estrutura do Projeto

```
source/
├── init.js           # Ponto de entrada da aplicação
├── CommandParser.js  # Interpretador dos comandos inseridos pelo utilizador
├── Commander.js      # Módulo responsável por enviar comandos ao drone
```

- **init.js:** Inicializa a aplicação e a comunicação com o drone.
- **CommandParser.js:** Analisa os comandos inseridos pelo utilizador.
- **Commander.js:** Envia os comandos adequados ao drone através do protocolo UDP.

---

## Notas Técnicas
- O drone utiliza a porta UDP `8889` e o IP `192.168.10.1` para comunicação.
- A aplicação está preparada para lidar com erros de conexão e feedback do drone em tempo real.

---

## Exemplo de Execução
Ao iniciar a aplicação, o terminal irá apresentar a mensagem:
```
A iniciar!
Socket is listening!
Enter a command:
```

A partir daí, pode inserir qualquer um dos comandos listados acima para controlar o drone.

---

## Aviso
Certifique-se de que o drone possui bateria suficiente antes de iniciar o voo. O drone aterrará automaticamente se o nível da bateria estiver abaixo de 5%.

---