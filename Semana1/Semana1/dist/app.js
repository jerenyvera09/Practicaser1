"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Variables simples
let donacionActiva = true;
let totalDonaciones = 0;
// Objetos literales
const tipo1 = {
    id: 1,
    descripcion: "Ropa"
};
const donacion1 = {
    id: 1,
    id_tipo: tipo1.id,
    fecha: new Date("2024-06-01"),
    estado: "pendiente",
    descripcion: "Ropa para niños"
};
const recepcion1 = {
    id: 1,
    id_donacion: donacion1.id,
    id_solicitud: 1001,
    fecha_entrega: new Date("2024-06-02"),
    observaciones: "Entregado sin novedad"
};
// Arreglos de objetos
const tipos = [tipo1];
const donaciones = [donacion1];
const recepciones = [recepcion1];
// FUNCIONES PARA DONACION
// Rest + Spread: agregar múltiples donaciones
function agregarDonaciones(...nuevasDonaciones) {
    donaciones.push(...nuevasDonaciones);
    totalDonaciones += nuevasDonaciones.length;
}
// Mostrar donaciones
function mostrarDonaciones() {
    console.log("Listado de Donaciones:");
    donaciones.forEach(d => {
        console.log(`Donación: ${d.descripcion}, Estado: ${d.estado}`);
    });
}
// FUNCIONES PARA RECEPCIÓN
function agregarRecepcion(...nuevas) {
    recepciones.push(...nuevas);
}
function mostrarRecepciones() {
    console.log("Listado de Recepciones:");
    recepciones.forEach(r => {
        console.log(`Recepción ID: ${r.id}, Observaciones: ${r.observaciones}`);
    });
}
// Callback: filtrar donaciones por estado
function filtrarDonaciones(callback) {
    return donaciones.filter(callback);
}
// PROMISE simulando operación lenta
function obtenerTiposAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tipos);
        }, 2000);
    });
}
// ASYNC/AWAIT
function mostrarTiposDonacion() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Cargando tipos de donación...");
        const data = yield obtenerTiposAsync();
        data.forEach(t => {
            console.log(`Tipo: ${t.descripcion}`);
        });
    });
}
// DEMOSTRACIÓN
// Agregar donación
agregarDonaciones({
    id: 2,
    id_tipo: 1,
    fecha: new Date(),
    estado: "entregada",
    descripcion: "Cobijas"
});
// Agregar recepción
agregarRecepcion({
    id: 2,
    id_donacion: 2,
    id_solicitud: 1002,
    fecha_entrega: new Date(),
    observaciones: "Entregado en buenas condiciones"
});
// Mostrar todos
mostrarDonaciones();
mostrarRecepciones();
const entregadas = filtrarDonaciones(d => d.estado === "entregada");
console.log("Donaciones Entregadas:", entregadas);
// Ejecutar función async
mostrarTiposDonacion();
