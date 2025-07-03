import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudService } from './solicitud.service';
import { SolicitudResolver } from './solicitud.resolver';
import { Solicitud } from './entities/solicitud.entity';
import { Receptor } from 'src/receptor/entities/receptor.entity';

@Module({
imports: [TypeOrmModule.forFeature([Solicitud, Receptor])],
providers: [SolicitudResolver, SolicitudService],
})
export class SolicitudModule {}