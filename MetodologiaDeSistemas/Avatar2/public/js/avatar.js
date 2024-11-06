// Variables globales para almacenar el ataque del jugador y del enemigo
let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 3; // Inicializamos la vida del jugador en 3
let vidaEnemigo = 3; // Inicializamos la vida del enemigo en 3

// Función que se ejecuta cuando carga la página
function iniciarJuego() {
    // Obtenemos el botón para seleccionar el personaje del jugador
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    // Agregamos un escuchador de eventos al botón, que ejecuta seleccionarPersonajeJugador cuando se hace clic
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador); 
    // Nota: No usamos paréntesis () en la función porque queremos que se ejecute solo cuando se haga clic, no al cargar.

    // Agregamos escuchadores de eventos para cada botón de ataque
    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', ataquePunio); // Evento para el ataque Puño
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada); // Evento para el ataque Patada
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida); // Evento para el ataque Barrida
}

// Mensajes introductorio
alert("Bienvenido a Avatar: La leyenda de Aang, ¿Estás listo? \n ¡Diviértete!");

// Función para seleccionar el personaje del jugador
function seleccionarPersonajeJugador() {
    // Obtenemos los inputs de los personajes
    let inputZuko = document.getElementById('zuko');
    let inputKatara = document.getElementById('katara');
    let inputAang = document.getElementById('aang');
    let inputToph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador'); // Donde mostraremos el personaje seleccionado

    // Comprobamos cuál personaje ha sido seleccionado por el jugador

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
            // Si no selecciona ningún personaje, mostramos una alerta
            alert('Por favor, elige un personaje para jugar');
            return;
        }

        // Ocultamos la sección de selección de personaje
        document.getElementById('seleccionar-personaje').style.display = 'none';

        // Llamamos a la función para seleccionar el personaje enemigo
        seleccionarPersonajeEnemigo();
    }


// Función para seleccionar el personaje del enemigo de manera aleatoria
function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1, 4); // Número aleatorio entre 1 y 4
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo'); // Donde mostraremos el personaje enemigo

    // Asignamos el personaje enemigo según el número aleatorio generado
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


// Función para ejecutar el ataque Puño
function ataquePunio() {
    ataqueJugador = 'Punio'; // Guardamos el ataque en la variable global
    alert('Has atacado con Puño');
    ataqueAleatorioEnemigo(); // Llamamos a la función para que el enemigo ataque
    mecanicaJuego(); // Llamamos a la función para comparar los ataques
}

// Función para ejecutar el ataque Patada
function ataquePatada() {
    ataqueJugador = 'Patada'; // Guardamos el ataque en la variable global
    alert('Has atacado con Patada');
    ataqueAleatorioEnemigo(); // Ataque aleatorio del enemigo
    mecanicaJuego(); // Comparar los ataques
}

// Función para ejecutar el ataque Barrida
function ataqueBarrida() {
    ataqueJugador = 'Barrida'; // Guardamos el ataque en la variable global
    alert('Has atacado con Barrida');
    ataqueAleatorioEnemigo(); // Ataque aleatorio del enemigo
    mecanicaJuego(); // Comparar los ataques
}

// Función que selecciona un ataque aleatorio para el enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3); // Número aleatorio entre 1 y 3
    if (vidaJugador != 0 && vidaEnemigo != 0) {
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = 'Punio'; // Ataque Puño
            alert('El enemigo ha utilizado Puño');
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = 'Patada'; // Ataque Patada
            alert('El enemigo ha utilizado Patada');
        } else {
            ataqueEnemigo = 'Barrida'; // Ataque Barrida
            alert('El enemigo ha utilizado Barrida');
        }
    }
}

// Función para mostrar un mensaje en pantalla con el resultado de la ronda
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ', el personaje del enemigo atacó con ' + ataqueEnemigo + ', ' + resultado;
    } else {
        parrafo.innerHTML = resultado;
    }
    sectionMensajes.appendChild(parrafo); // Añadimos el mensaje a la sección de mensajes
}

// Función que define la mecánica del juego
function mecanicaJuego() {
    let spanVidaJugador = document.getElementById('vida-jugador');
    let spanVidaEnemigo = document.getElementById('vida-enemigo');
    let resultado = ''; // Guardamos el resultado de la ronda

    // Si ambos jugadores tienen vidas
    if (vidaJugador != 0 && vidaEnemigo != 0) {
        if (ataqueJugador == ataqueEnemigo) {
            crearMensaje('¡Empate!');
        } else if (ataqueJugador == 'Punio' && ataqueEnemigo == 'Patada') {
            crearMensaje('Has perdido esta ronda');
            spanVidaJugador.innerHTML -= 1;
            vidaJugador -= 1;
        } else if (ataqueJugador == 'Patada' && ataqueEnemigo == 'Barrida') {
            crearMensaje('Has perdido esta ronda');
            spanVidaJugador.innerHTML -= 1;
            vidaJugador -= 1;
        } else if (ataqueJugador == 'Barrida' && ataqueEnemigo == 'Punio') {
            crearMensaje('Has perdido esta ronda');
            spanVidaJugador.innerHTML -= 1;
            vidaJugador -= 1;
        } else {
            crearMensaje('¡Has ganado esta ronda!');
            spanVidaEnemigo.innerHTML -= 1;
            vidaEnemigo -= 1;
        }
    } else if (vidaEnemigo > 0) {
        resultado = '¡HAS PERDIDO, INTÉNTALO NUEVAMENTE!';
        crearMensaje(resultado);
    } else {
        resultado = '¡HAS GANADO! ¡FELICITACIONES!';
        crearMensaje(resultado);
    }
}

// Función para generar un número aleatorio entre dos valores
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Iniciamos el juego cuando la página se carga
window.addEventListener('load', iniciarJuego);
