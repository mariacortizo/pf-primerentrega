let destino;
let costoPorNoche;
let cantidadNoches;
let costoTransporte;
let costoComidas;
let costoExcursiones;
const transportesDisponibles = ["Avión", "Tren", "Autobús", "Coche"];

function obtenerDatos(event) {
    event.preventDefault(); 

    destino = document.getElementById("destination").value.trim();

    if (destino === "") {
        alert("Por favor, ingrese un destino.");
        return;
    }

    costoPorNoche = parseFloat(document.getElementById("hotelCost").value);
    cantidadNoches = parseInt(document.getElementById("duration").value);
    costoTransporte = parseFloat(document.getElementById("transportCost").value);
    costoComidas = parseFloat(document.getElementById("comidasCost").value);
    costoExcursiones = parseFloat(document.getElementById("excursionCost").value);

    if (!transportesDisponibles.includes(document.getElementById("transportType").value)) {
        alert("Por favor, seleccione un tipo de transporte válido de la lista.");
        return;
    }

    if (!isNaN(costoPorNoche) && !isNaN(cantidadNoches) && costoPorNoche > 0 &&
        !isNaN(costoTransporte) && costoTransporte >= 0 &&
        !isNaN(costoComidas) && costoComidas >= 0 &&
        !isNaN(costoExcursiones) && costoExcursiones >= 0) {
        calcularPresupuesto();
    } else {
        alert("Por favor, ingrese números válidos y mayores que cero.");
    }
}

function calcularPresupuesto() {
    let costoTotalAlojamiento = costoPorNoche * cantidadNoches;
    let costoTotalViaje = costoTotalAlojamiento + costoTransporte + (costoComidas * cantidadNoches) + costoExcursiones;

    console.log("El costo total del alojamiento en", destino, "es:", costoTotalAlojamiento);
    console.log("El costo total del viaje es:", costoTotalViaje);
    alert(`El costo total del viaje a ${destino} es: $${costoTotalViaje.toFixed(2)}`);
}

document.getElementById("travelForm").addEventListener("submit", obtenerDatos);
