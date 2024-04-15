let destino;
let costoPorNoche;
let cantidadNoches;
let costoTransporte;
let costoComidas;
let costoExcursiones;
const destinosDisponibles = ["Venecia", "La Spezia", "Roma", "Sorrento", "Napoles"];

// Convertir todos los destinos de la lista a minúsculas
const destinosDisponiblesLowerCase = destinosDisponibles.map(destino => destino.toLowerCase());

function obtenerDatos() {
    let listaDestinos = "Destinos Disponibles:\n";
    for (let i = 0; i < destinosDisponibles.length; i++) {
        listaDestinos += destinosDisponibles[i] + "\n";
    }

    let destinoIngresado = prompt(listaDestinos + "\nIngrese el nombre del destino deseado:");
    destinoIngresado = destinoIngresado.toLowerCase(); // Convertir la entrada del usuario a minúsculas
    
    if (destinosDisponiblesLowerCase.includes(destinoIngresado)) { // Utilizar la lista de destinos en minúsculas para la comparación
        destino = destinoIngresado;
        costoPorNoche = parseFloat(prompt(`Ingrese el costo por noche en ${destino}:`));
        cantidadNoches = parseInt(prompt("Ingrese la cantidad de noches de estadía:"));
        costoTransporte = parseFloat(prompt("Ingrese el costo de transporte:"));
        costoComidas = parseFloat(prompt("Ingrese el costo estimado de comidas por día:"));
        costoExcursiones = parseFloat(prompt("Ingrese el costo de las excursiones:"));
    
        if (!isNaN(costoPorNoche) && !isNaN(cantidadNoches) && costoPorNoche > 0 &&
            !isNaN(costoTransporte) && costoTransporte >= 0 &&
            !isNaN(costoComidas) && costoComidas >= 0 &&
            !isNaN(costoExcursiones) && costoExcursiones >= 0) {
            calcularPresupuesto();
        } else {
            alert("Por favor, ingrese números válidos y mayores que cero.");
        }
    } else {
        alert("Por favor, ingrese un destino válido de la lista.");
    }
}

function calcularPresupuesto() {
    let costoTotalAlojamiento = costoPorNoche * cantidadNoches;
    let costoTotalViaje = costoTotalAlojamiento + costoTransporte + (costoComidas * cantidadNoches) + costoExcursiones;
    
    console.log("El costo total del alojamiento en", destino, "es:", costoTotalAlojamiento);
    console.log("El costo total del viaje es:", costoTotalViaje);
    alert(`El costo total del viaje a ${destino} es: $${costoTotalViaje.toFixed(2)}`);
}

obtenerDatos();
