// Punto de entrada de la aplicación REST
// Aquí se inicia el servidor y se aplica la configuración principal
// Relacionado con: Implementación del Backend por Recurso
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
