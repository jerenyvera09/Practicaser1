import { AppDataSource } from "./data-source";

export async function initDatabase() {
  try {
    await AppDataSource.initialize();
    console.log("📦 Base de datos conectada correctamente.");
  } catch (error) {
    console.error("❌ Error al conectar la base de datos:", error);
  }
}
