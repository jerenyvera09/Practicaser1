// Módulo principal de la aplicación REST
// Aquí se importan los módulos que gestionan los recursos y servicios
// Relacionado con: Implementación del Backend por Recurso y Definición de Modelo, Servicios y Persistencia
import { Module } from '@nestjs/common';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [PersonaModule],
})
export class AppModule {}
