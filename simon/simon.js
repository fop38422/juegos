let serie = [];
let serieJ = [];
let score = 0;
let opciones = [1, 2, 3, 4];
let gameover = false;


function turnoCPU() {
    document.getElementById("go").disabled = true;
    document.getElementsByClassName("colores").disabled = true;

    serie.push(opciones[Math.floor(Math.random() * 4)]);

    for (let i = 0; i < serie.length; i++) {
        setTimeout(()=>cambiarImagen(serie[i]), 500*i);
    }

    document.getElementsByClassName("colores").disabled = false;

    turnoJ();
}

function turnoJ() {
    if (serieJ.length == serie.length) {
        if (JSON.stringify(serieJ) === JSON.stringify(serie)) {
            serieJ = [];
            document.getElementById("puntuacion").innerHTML = score;
            score += serie.length;
            turnoCPU;
        }else{
            alert("¡Has perdido");
        }
    }
}

function cambiarImagen(numerin) {
    switch (numerin) {
        case 1: document.getElementById("imagen").src ="img/verde.png";
        break;
        case 2: document.getElementById("imagen").src ="img/rojo.png";
        break;
        case 3: document.getElementById("imagen").src ="img/amarillo.png";
        break;
        case 4: document.getElementById("imagen").src ="img/azul.png";
        break; 
    }
}

function pulsarVerde() {
    serieJ.push(1);
}

function pulsarRojo() {
    serieJ.push(2);
}

function pulsarAmarillo() {
    serieJ.push(3);
}

function pulsarAzul() {
    serieJ.push(4);
}