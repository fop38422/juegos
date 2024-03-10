let tablero = [];
let filas = 10;
let columnas = 10;
let minas = 5;
let vidas = 3;
let tiempo = 0;
let posMinas = [];
let clicks = 0;

function main() {
    iniciar();
    setInterval(pasarTiempo, 1000);
}

function iniciar() {
    document.getElementById("vidas").innerText = vidas;
    tiempo = 0;
    document.getElementById("tiempo").innerText = tiempo;
    crearMinas();

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            let casilla = document.createElement("div");
            casilla.id = i.toString() + "-" + j.toString();
            casilla.addEventListener("click", clickarCasilla)
            document.getElementById("panel").append(casilla);
            fila.push(casilla);
        }
        tablero.push(fila);
    }
}

function pasarTiempo() {
    document.getElementById('tiempo').innerText = tiempo;
    tiempo++;
}

function clickarCasilla() {
    let casilla = this;
    if (posMinas.includes(casilla.id)) {
        vidas--;
        document.getElementById("vidas").innerText = vidas;
    }

    let coordenadas = casilla.id.split("-");
    let f = parseInt(coordenadas[0]);
    let c = parseInt(coordenadas[1]);
    comprobarMinas(f, c);
}

function crearMinas() {
    let minasRestantes = minas;
    while (minasRestantes > 0) {
        let f = Math.floor(Math.random() * filas);
        let c = Math.floor(Math.random() * columnas);
        let id = f.toString() + "-" + c.toString();

        if (!posMinas.includes(id)) {
            posMinas.push(id);
            minasRestantes -= 1;
        }
    }
}

function comprobarMinas(f, c) {
    let minasCercanas = 0;

    minasCercanas += comprobarCasilla(f-1, c-1);
    minasCercanas += comprobarCasilla(f-1, c);
    minasCercanas += comprobarCasilla(f-1, c+1);
    minasCercanas += comprobarCasilla(f, c-1);
    minasCercanas += comprobarCasilla(f, c+1);
    minasCercanas += comprobarCasilla(f+1, c-1);
    minasCercanas += comprobarCasilla(f+1, c);
    minasCercanas += comprobarCasilla(f+1, c+1);

    if (minasCercanas > 0) {
        tablero[f][c].innerText = "🚩";
    } else if (minasCercanas == 0) {
        if (posMinas.includes(tablero[f][c].id)) {
            tablero[f][c].innerText = "💣";
        }else{
            tablero[f][c].innerText = "⬜";
        }
    }
}

function comprobarCasilla(f, c) {
    if (posMinas.includes(f.toString() + "-" + c.toString())) {
        return 1;
    }else{
        return 0;
    }
}