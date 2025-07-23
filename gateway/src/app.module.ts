import { Module } from '@nestjs/common';
import { DonantesModule } from './donantes/donantes.module';
import { NatsModule } from './transports/nats.module';
import { SolicitudModule } from './solicitud/solicitud.module';

@Module({
  imports: [DonantesModule, SolicitudModule, NatsModule],
})
export class AppModule {}
