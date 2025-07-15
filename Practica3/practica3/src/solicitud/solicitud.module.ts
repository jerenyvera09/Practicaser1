import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { SolicitudService } from './solicitud.service';
import { SolicitudGateway } from './solicitud.gateway';
import { Receptor } from '../receptor/entities/receptor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitud, Receptor])],
  providers: [SolicitudService, SolicitudGateway],
})
export class SolicitudModule {}
