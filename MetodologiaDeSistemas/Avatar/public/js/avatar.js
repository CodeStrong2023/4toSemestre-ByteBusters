class Personaje {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }

    atacar(ataque) {
        this.ataque = ataque;
        console.log(`${this.nombre} atacó con ${ataque}`);
    }

    recibirAtaque() {
        this.vida -= 1;
        console.log(`${this.nombre} recibió daño, vida restante: ${this.vida}`);
    }

    estaVivo() {
        return this.vida > 0;
    }
}

// Arreglo global para almacenar personajes
let avatares = [];

// Crear personajes y añadirlos al arreglo
avatares.push(new Personaje('Zuko', 3));
avatares.push(new Personaje('Katara', 3));
avatares.push(new Personaje('Aang', 3));
avatares.push(new Personaje('Toph', 3));
avatares.push(new Personaje('Zhao', 3));
avatares.push(new Personaje('Sokka', 3));

// Variables globales
let personajeJugador;
let personajeEnemigo;
let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', () => ataqueJugadorRealizado('Puño'));
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', () => ataqueJugadorRealizado('Patada'));
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', () => ataqueJugadorRealizado('Barrida'));
}

function seleccionarPersonajeJugador() {
    let spanPersonajeJugador = document.getElementById('personaje-jugador');
    let personajeSeleccionado;

    const inputElements = document.getElementsByName('personaje');
    for (let input of inputElements) {
        if (input.checked) {
            personajeSeleccionado = avatares.find(p => p.nombre.toLowerCase() === input.id);
            break;
        }
    }

    if (personajeSeleccionado) {
        personajeJugador = personajeSeleccionado;
        spanPersonajeJugador.innerHTML = personajeJugador.nombre;
        // Ocultar sección de selección de personajes e instrucciones
        document.getElementById('seleccionar-personaje').style.display = 'none';
        document.getElementById('sidebar').style.display = 'none';
        seleccionarPersonajeEnemigo();
    } else {
        alert('Por favor, elige un personaje para jugar');
    }
}

function seleccionarPersonajeEnemigo() {
    personajeEnemigo = avatares[aleatorio(0, avatares.length - 1)];
    document.getElementById('personaje-enemigo').innerHTML = personajeEnemigo.nombre;
}

function ataqueJugadorRealizado(ataque) {
    ataqueJugador = ataque;
    personajeJugador.atacar(ataqueJugador);
    ataqueEnemigo = ataqueEnemigoAleatorio();
    procesarResultados();
}

function ataqueEnemigoAleatorio() {
    const ataques = ['Puño', 'Patada', 'Barrida'];
    return ataques[aleatorio(0, ataques.length - 1)];
}

function procesarResultados() {
    const mensajes = document.getElementById('mensajes');
    if (personajeEnemigo.estaVivo()) {
        personajeEnemigo.recibirAtaque();
        mostrarMensaje(`Has atacado a ${personajeEnemigo.nombre} con ${ataqueJugador}.`);
    }

    if (personajeJugador.estaVivo()) {
        personajeJugador.recibirAtaque();
        mostrarMensaje(`${personajeEnemigo.nombre} te ha atacado con ${ataqueEnemigo}.`);
    }

    if (!personajeEnemigo.estaVivo() || !personajeJugador.estaVivo()) {
        mostrarResultadoFinal();
    }
}

function mostrarMensaje(mensaje) {
    const mensajes = document.getElementById('mensajes');
    mensajes.innerHTML += `<p>${mensaje}</p>`;
    // Borrar mensajes después de 3 segundos
    setTimeout(() => {
        mensajes.innerHTML = '';
    }, 3000);
}

function mostrarResultadoFinal() {
    const mensajes = document.getElementById('mensajes');
    if (!personajeJugador.estaVivo()) {
        mensajes.innerHTML += '<p>¡Has perdido! 😢</p>';
    } else {
        mensajes.innerHTML += '<p>¡Has ganado! 🎉</p>';
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById('boton-reiniciar').addEventListener('click', reiniciarJuego);

function reiniciarJuego() {
    personajeJugador = null;
    personajeEnemigo = null;
    document.getElementById('mensajes').innerHTML = '';
    document.getElementById('vida-jugador').innerHTML = 3;
    document.getElementById('vida-enemigo').innerHTML = 3;
    document.getElementById('seleccionar-personaje').style.display = 'block';
    document.getElementById('sidebar').style.display = 'block';
}

window.onload = iniciarJuego;
