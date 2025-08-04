// Importa la clase DataSource de TypeORM para la configuración de la base de datos
import { DataSource } from 'typeorm';
// Importa la función join de path para construir rutas absolutas
import { join } from 'path';

// Configuración de la fuente de datos para TypeORM
export const AppDataSource = new DataSource({
  type: 'sqlite', // Tipo de base de datos
  database: join(__dirname, '../../database.sqlite'), // Ruta absoluta a la base de datos SQLite
  entities: [join(__dirname, '../../shared-domain/src/entities/*.ts')], // Ruta absoluta a las entidades
  synchronize: true, // Sincroniza automáticamente el esquema de la base de datos
});
