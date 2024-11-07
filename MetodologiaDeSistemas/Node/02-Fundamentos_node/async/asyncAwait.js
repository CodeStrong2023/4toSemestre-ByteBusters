
// La palabra async no es necearia en las funciones que
// ya son asíncronas. Igual proyectan una sincronía visual
// al usar async.
async function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve(nombre);
            //reject('Hay un error');
        }, 1000); 
    });
}

async function hablar(nombre) {
        return new Promise((resolve, reject) => {
            setTimeout (function () {
                console.log("bla bla bla bla");
                resolve(nombre);
        },1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) =>{
            setTimeout(function(){
            console.log('Adiós, '+ nombre);
            resolve(nombre);
            reject('Hay un error');
        }, 1000);
    });
};

// await hola('Ariel'); // Esto es una mala sintaxis
// await sólo es válido DENTRO DE UNA FUNCIÓN ASÍNCRONA
async function main() {
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
};
console.log('Empezamos el proceso...')
main();
console.log('Esta va a ser la segunda instrucción')

// Código en inglés
async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hello, ' + name);
            resolve(name);
            //reject('There is an error');
        }, 1000); 
    });
}

async function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("blah blah blah blah");
            resolve(name);
        }, 1000);
    });
}

async function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Goodbye, ' + name);
            resolve(name);
            reject('There is an error');
        }, 1000);
    });
}

// await hello('Ariel'); // This is incorrect syntax
// await is only valid INSIDE an ASYNC FUNCTION
async function main() {
    let name = await hello('Ariel');
    await talk();
    await talk();
    await talk();
    await goodbye(name);
    console.log('Process ends...')
};
