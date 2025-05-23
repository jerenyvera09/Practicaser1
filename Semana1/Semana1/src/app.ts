// Interfaces
interface TipoDonacion {
  id: number;
  descripcion: string;
}

interface Donacion {
  id: number;
  id_tipo: number;
  fecha: Date;
  estado: string;
  descripcion: string;
}

interface Recepcion {
  id: number;
  id_donacion: number;
  id_solicitud: number;
  fecha_entrega: Date;
  observaciones: string;
}

// Variables simples
let donacionActiva: boolean = true;
let totalDonaciones: number = 0;

// Objetos literales
const tipo1: TipoDonacion = {
  id: 1,
  descripcion: "Ropa"
};

const donacion1: Donacion = {
  id: 1,
  id_tipo: tipo1.id,
  fecha: new Date("2024-06-01"),
  estado: "pendiente",
  descripcion: "Ropa para niños"
};

const recepcion1: Recepcion = {
  id: 1,
  id_donacion: donacion1.id,
  id_solicitud: 1001,
  fecha_entrega: new Date("2024-06-02"),
  observaciones: "Entregado sin novedad"
};

// Arreglos de objetos
const tipos: TipoDonacion[] = [tipo1];
const donaciones: Donacion[] = [donacion1];
const recepciones: Recepcion[] = [recepcion1];

// FUNCIONES PARA DONACION

// Rest + Spread: agregar múltiples donaciones
function agregarDonaciones(...nuevasDonaciones: Donacion[]) {
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

function agregarRecepcion(...nuevas: Recepcion[]) {
  recepciones.push(...nuevas);
}

function mostrarRecepciones(): void {
  console.log("Listado de Recepciones:");
  recepciones.forEach(r => {
    console.log(`Recepción ID: ${r.id}, Observaciones: ${r.observaciones}`);
  });
}

// Callback: filtrar donaciones por estado
function filtrarDonaciones(callback: (d: Donacion) => boolean): Donacion[] {
  return donaciones.filter(callback);
}

// PROMISE simulando operación lenta
function obtenerTiposAsync(): Promise<TipoDonacion[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tipos);
    }, 2000);
  });
}

// ASYNC/AWAIT
async function mostrarTiposDonacion() {
  console.log("Cargando tipos de donación...");
  const data = await obtenerTiposAsync();
  data.forEach(t => {
    console.log(`Tipo: ${t.descripcion}`);
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
