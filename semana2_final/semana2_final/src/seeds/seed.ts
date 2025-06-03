import { AppDataSource } from "../data-source";
import { Donacion } from "../entities/Donacion";
import { TipoDonacion } from "../entities/TipoDonacion";
import { Recepcion } from "../entities/Recepcion";
import { Prioridad } from "../entities/Prioridad";
import { AreaResponsable } from "../entities/AreaResponsable";

async function seed() {
  await AppDataSource.initialize();
  console.log("✅ Conectado a la base de datos");

  // Limpiar datos anteriores con TRUNCATE CASCADE
  await AppDataSource.query(`
    TRUNCATE TABLE 
      "recepcion", 
      "donacion", 
      "tipo_donacion",
      "prioridad",
      "area_responsable"
    CASCADE;
  `);
  console.log("🧹 Tablas limpiadas correctamente");

  const tipoRepo = AppDataSource.getRepository(TipoDonacion);
  const donacionRepo = AppDataSource.getRepository(Donacion);
  const recepcionRepo = AppDataSource.getRepository(Recepcion);
  const prioridadRepo = AppDataSource.getRepository(Prioridad);
  const areaRepo = AppDataSource.getRepository(AreaResponsable);

  // Crear tipos de donación
  const tipos = tipoRepo.create([
    { descripcion: "Ropa" },
    { descripcion: "Alimentos" },
    { descripcion: "Medicinas" },
    { descripcion: "Juguetes" },
    { descripcion: "Útiles escolares" }
  ]);
  await tipoRepo.save(tipos);
  console.log("📌 Tipos de donación insertados");

  // Crear prioridades
  const prioridades = prioridadRepo.create([
    { nivel: "Alta", descripcion: "Atención urgente" },
    { nivel: "Media", descripcion: "Atención pronta" },
    { nivel: "Baja", descripcion: "Sin urgencia" },
    { nivel: "Crítica", descripcion: "Situación crítica y prioritaria" },
    { nivel: "Normal", descripcion: "Caso estándar" }
  ]);
  await prioridadRepo.save(prioridades);
  console.log("⚠ Prioridades insertadas");

  // Crear áreas responsables
  const areas = areaRepo.create([
    { nombre: "Logística", encargado: "Carlos Pérez" },
    { nombre: "Almacén", encargado: "Lucía Gómez" },
    { nombre: "Distribución", encargado: "María Torres" },
    { nombre: "Recepción", encargado: "Jorge Ruiz" },
    { nombre: "Coordinación", encargado: "Ana Martínez" }
  ]);
  await areaRepo.save(areas);
  console.log("🏢 Áreas responsables insertadas");

  // Crear donaciones
  const donaciones = donacionRepo.create([
    { tipo: tipos[0], fecha: new Date(), estado: "pendiente", descripcion: "Abrigos de invierno" },
    { tipo: tipos[1], fecha: new Date(), estado: "entregada", descripcion: "Comida no perecible" },
    { tipo: tipos[2], fecha: new Date(), estado: "pendiente", descripcion: "Medicamentos básicos" },
    { tipo: tipos[3], fecha: new Date(), estado: "pendiente", descripcion: "Juguetes para niños" },
    { tipo: tipos[4], fecha: new Date(), estado: "entregada", descripcion: "Cuadernos y lápices" }
  ]);
  await donacionRepo.save(donaciones);
  console.log("📦 Donaciones insertadas");

  // Crear recepciones
  const recepciones = recepcionRepo.create([
    { donacion: donaciones[1], id_solicitud: 1001, fecha_entrega: new Date(), observaciones: "Entregado sin novedades" },
    { donacion: donaciones[4], id_solicitud: 1002, fecha_entrega: new Date(), observaciones: "Entregado con observación menor" },
    { donacion: donaciones[0], id_solicitud: 1003, fecha_entrega: new Date(), observaciones: "Entrega parcial" },
    { donacion: donaciones[3], id_solicitud: 1004, fecha_entrega: new Date(), observaciones: "Falta un juguete" },
    { donacion: donaciones[2], id_solicitud: 1005, fecha_entrega: new Date(), observaciones: "Entrega completa y a tiempo" }
  ]);
  await recepcionRepo.save(recepciones);
  console.log("📥 Recepciones insertadas");

  console.log("✅ Seeds insertados con éxito.");
  await AppDataSource.destroy();
}

seed();