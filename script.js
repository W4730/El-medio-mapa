// Variable de tripulación
let tripulacion = 10;

let Kidd = false;

let Isabella = false;

let derrotado = false;

let mapa = {
    completo : false,
    sangre : false
}

// Función para renderizar la lista de tripulantes
function renderTripulacion() {
    const ulElement = document.querySelector('ul');
    ulElement.innerHTML = ''; // Limpiar la lista
    
    for (let i = 1; i <= tripulacion; i++) {
        const li = document.createElement('li');
        li.textContent = `!`;
        ulElement.appendChild(li);
    }
}

// Función para bajar tripulantes
function bajarTripulantes(cantidad) {
    tripulacion -= cantidad;
    if (tripulacion < 0) tripulacion = 0;
    renderTripulacion();
    actualizarBotones();
}

function subirTripulantes(cantidad) {
    tripulacion += cantidad;
    renderTripulacion();
    actualizarBotones();
}

function AceptarKidd() {
    Kidd = true;
    subirTripulantes(2);
    actualizarBotones();
}

function GanaraKidd() {
    derrotado = true;
    actualizarBotones();
}

function AceptarIsabella() {
    Isabella = true;
    subirTripulantes(1);
    actualizarBotones();
}

function CompletarMapa() {
    mapa.completo = true;
    actualizarBotones();
}

function robarMapa() {
    mapa.completo = true;
    mapa.sangre = true;
    actualizarBotones();
}

// Función para verificar y actualizar estado del botón según tripulación
function verificarTripulacion(buttonId, minTripulacion) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (tripulacion < minTripulacion) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}

// Función para deshabilitar botón si un personaje está activo
function verificarPersonaje(buttonId, personaje) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (personaje) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
}

// Función para deshabilitar botón si una propiedad de un objeto está activa
function verificarMapa(buttonId, objeto, propiedad) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (objeto[propiedad]) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
}

// Función para actualizar todos los botones
function actualizarBotones() {
    // Verificar tripulación
    // Ejemplo: verificarTripulacion('miBoton', 5); // Deshabilita si tripulación < 5
    verificarTripulacion('btn3', 9); // Deshabilita robarMapa si tripulación < 5
    // Verificar personajes
    // Ejemplo: verificarPersonaje('miBoton', Isabella); // Deshabilita si Isabella está activa
    verificarPersonaje('btn1', derrotado); // Deshabilita robarMapa si Kidd no está activo
    verificarPersonaje('btn4', Isabella); // Deshabilita CompletarMapa si Isabella no está activa
    verificarPersonaje('btn5', Kidd);
    
    // Verificar mapa
    // Ejemplo: verificarMapa('miBoton', mapa, 'completo'); // Deshabilita si mapa.completo es true
    // Ejemplo: verificarMapa('miBoton', mapa, 'sangre'); // Deshabilita si mapa.sangre es true
    verificarMapa('btn2', mapa, 'completo'); // Deshabilita CompletarMapa si mapa.completo es true
}

// Renderizar la lista inicial
renderTripulacion();
