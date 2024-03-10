const opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
let replay = true;

do{
    let vicJugador = 0;
    let vicCPU = 0;

    let partidas = prompt("¿Cuántas partidas quieres jugar?");

    for (let i = 1; i <= partidas; i++){
        console.log("Partida " + i);

        let opcionJugador = prompt("Escribe una opción en minúsculas: piedra, papel, tijeras, lagarto o spock");
        let opcionCPU = Math.floor(Math.random() * opciones.length);

        console.log("La CPU sacó " + opciones[opcionCPU]);

        if (opciones[opcionCPU] == opcionJugador){
            console.log("Empate");
        }else if (
            (opcionJugador == "piedra" && (opciones[opcionCPU] == "tijeras" || opciones[opcionCPU] == "lagarto")) ||
            (opcionJugador == "papel" && (opciones[opcionCPU] == "piedra" || opciones[opcionCPU] == "spock")) ||
            (opcionJugador == "tijeras" && (opciones[opcionCPU] == "papel" || opciones[opcionCPU] == "lagarto")) ||
            (opcionJugador == "lagarto" && (opciones[opcionCPU] == "papel" || opciones[opcionCPU] == "spock")) ||
            (opcionJugador == "spock" && (opciones[opcionCPU] == "piedra" || opciones[opcionCPU] == "tijeras"))
        ){
            console.log("¡Ganas!");
            vicJugador++;
        }else{
            console.log("Gana la CPU");
            vicCPU++;
        }

        console.log("Jugador: " + vicJugador + "     " + "CPU: " + vicCPU);
    }

    console.log("¡Se acabó!")

    if (vicCPU == vicJugador){
        console.log("Empate");
    }else if (vicJugador > vicCPU){
        console.log("¡Ganaste la partida!");
    }else{
        console.log("La CPU ha ganado la partida.");
    }

    let sn = prompt("¿Quieres volver a jugar? Escribe 'S' o 'N'.");
    if (sn == "N" || sn == "n"){
        replay = false;
    }
}
while (replay);