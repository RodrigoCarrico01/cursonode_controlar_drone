este código vai servir para controlar o drone da djitello 
https://store.dji.com/pt/shop/tello-series

//o drone da djitello é como se fosse um router wireless

// ao conectar a uma máquina de rede o protocolo patrão é tcpip 

// a diferença para o drone é que ele tem uma porta udp mas ele tbm tem um indereço IP

// dá para dar informações e receber informações do drone ao ligarmos o drone ao wifi

// CLI é uma comand line interface, isto é, nós vamos interagir com o nosso terminal.


______________________________


1º Ligar o drone DJI Tello pelo button lateral e esperar acender a luz
2º Luz ligada = ativa um router, chamado tello.(nome dele)
3º Conecta o drone ao teu computador
4º Depois é só dar node source/init.js
5º e depois executa os comandos


______________________________

Sequência de voar e pousar o drone

// aviso, quando o drone tem menos de 5% ele começa o pouso de emergência

1. iniciar a aplicação `node init`
2. ver quanta bateria temos `battery`
3. iniciar voo `takeoff`
4. controlar como queremos `forward 10` ou `left 23` ou `back 100` etc...
5. pousar o drone `land`