// Variable de tripulación
let tripulacion = 10;

let Kidd = false;

let Isabella = false;

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
}

function subirTripulantes(cantidad) {
    tripulacion += cantidad;
    renderTripulacion();
}

function AceptarKidd() {
    Kidd = true;
    subirTripulantes(2);
}

function AceptarIsabella() {
    Isabella = true;
    subirTripulantes(1);
}

function CompletarMapa() {
    mapa.completo = true;
}

function robarMapa() {
    mapa.completo = true;
    mapa.sangre = true;
}

// Renderizar la lista inicial
renderTripulacion();
