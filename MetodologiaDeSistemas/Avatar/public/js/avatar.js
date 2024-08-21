let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3;
let vidaEnemigo = 3;

function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);//Llamativo, si pongo () no funciona...

    let botonPunio = document.getElementById('boton-punio'); //Ahora creamos un escuchador de eventos
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida);

}

alert("Este juego es similar al piedra, papel o tijera");
alert("En este juego contarás con las opciones: \n 1- Puño \n 2- Patada \n 3- Barrida");
alert("En todo caso: \n 1- PUÑO le gana a BARRIDA pero pierde con PATADA \n 2- PATADA le gana a PUÑO pero pierde con BARRIDA \n 3- BARRIDA le gana a PATADA pero pierde con PUÑO");
alert("Sencillo, no? \n Diviertete!")

function seleccionarPersonajeJugador() {

    let inputZuko = document.getElementById('zuko');
    let inputKatara = document.getElementById('katara');
    let inputAang = document.getElementById('aang');
    let inputToph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');


    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
        personajeJugador = 'Zuko';
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
        personajeJugador = 'Katara';
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
    } else {
        alert('Por favor, elige un personaje para jugar');
    }
    seleccinarPersonajeEnemigo();
}

function seleccinarPersonajeEnemigo() { //esta función va dentro de seleccionarPersonajeJugador() al final
    let personajeAleatorio = aleatorio(1, 4); //A continuación creamos las variables para cada personaje
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');

    //comenzamos con la lógica
    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = 'Zuko';
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = 'Katara';
    } else if (personajeAleatorio == 3) {
        spanPersonajeEnemigo.innerHTML = 'Aang';
    } else {
        spanPersonajeEnemigo.innerHTML = 'Toph';
    }
}

function ataquePunio() { //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Punio';
    alert('Has atacado con Puño');
    ataqueAleatorioEnemigo();
    mecanicaJuego();
}

function ataquePatada() { //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Patada';
    alert('Has atacado con Patada');
    ataqueAleatorioEnemigo();
    mecanicaJuego();
}

function ataqueBarrida() { //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Barrida';
    alert('Has atacado con Barrida');
    ataqueAleatorioEnemigo();
    mecanicaJuego();
}

function ataqueAleatorioEnemigo() {//Ahora ocupando la variable global nueva le decimos el ataque y necesitamos la función aleatorio
    let ataqueAleatorio = aleatorio(1, 3);
    if (vidaJugador != 0 && vidaEnemigo != 0) {
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = 'Punio';
            alert('El enemigo ha utilizado Puño')
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = 'Patada';
            alert('El enemigo ha utilizado Patada');
        } else {
            ataqueEnemigo = 'Barrida';
            alert('El enemigo ha utilizado Barrida');
        }
        //crearMensaje();
    }
}
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    let resultadoRonda = resultado;
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ', el personaje del enemigo atacó con ' + ataqueEnemigo + ', ' + resultadoRonda;
    }
    else {
        parrafo.innerHTML = resultadoRonda;

    }
    sectionMensajes.appendChild(parrafo);
}


function mecanicaJuego() {
    let spanVidaJugador = document.getElementById('vida-jugador');
    let spanVidaEnemigo = document.getElementById('vida-enemigo');
    let resultado = ''; //Creo "resultado" para almacenar la victoria o derrota del personaje al perder todas las vidas

    if (vidaJugador != 0 && vidaEnemigo != 0) {
        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje('Empate!');
        }
        else if (ataqueJugador == 'Punio' && ataqueEnemigo == 'Patada') {
            crearMensaje('Has perdido esta ronda');
            spanVidaJugador.innerHTML -= 1;
            vidaJugador -= 1; //resto vida a la par de la etiqueta de html para no tener problemas de tipo de dato
        }
        else if (ataqueJugador == 'Patada' && ataqueEnemigo == 'Barrida') {
            crearMensaje('Has perdido esta ronda');
            spanVidaJugador.innerHTML -= 1;
            vidaJugador -= 1;
        }
        else if (ataqueJugador == 'Barrida' && ataqueEnemigo == 'Punio') {
            crearMensaje('Has perdido esta ronda');
            spanVidaJugador.innerHTML -= 1;
            vidaJugador -= 1;
        }
        else {
            crearMensaje('Has ganado esta ronda')
            spanVidaEnemigo.innerHTML -= 1;
            vidaEnemigo -= 1;
        }
    }
    else if (vidaEnemigo > 0) {
        resultado = 'HAS PERDIDO, INTENTALO NUEVAMENTE!';
        crearMensaje(resultado);
    }
    else {
        resultado = 'HAS GANADO! FELICITACIONES!';
        crearMensaje(resultado);
    }
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);