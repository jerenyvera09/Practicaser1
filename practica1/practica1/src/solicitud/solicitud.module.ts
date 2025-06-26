import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudService } from './solicitud.service';
import { SolicitudController } from './solicitud.controller';
import { Solicitud } from './entities/solicitud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitud])],
  controllers: [SolicitudController],
  providers: [SolicitudService],
  exports: [TypeOrmModule], //  Exportamos el repositorio para usarlo desde otros módulos
})
export class SolicitudModule {}
