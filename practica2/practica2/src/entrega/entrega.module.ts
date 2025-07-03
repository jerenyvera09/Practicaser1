import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaService } from './entrega.service';
import { EntregaResolver } from './entrega.resolver';
import { Entrega } from './entities/entrega.entity';
import { Solicitud } from 'src/solicitud/entities/solicitud.entity';

@Module({
imports: [TypeOrmModule.forFeature([Entrega, Solicitud])],
providers: [EntregaResolver, EntregaService],
})
export class EntregaModule {}