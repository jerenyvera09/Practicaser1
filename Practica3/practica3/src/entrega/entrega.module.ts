import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaService } from './entrega.service';
import { EntregaGateway } from './entrega.gateway';
import { Entrega } from './entities/entrega.entity';
import { Solicitud } from '../solicitud/entities/solicitud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entrega, Solicitud])],
  providers: [EntregaService, EntregaGateway],
  exports: [EntregaService],
})
export class EntregaModule {}
