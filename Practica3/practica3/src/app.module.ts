import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceptorModule } from './receptor/receptor.module';
import { SolicitudModule } from './solicitud/solicitud.module';
import { EntregaModule } from './entrega/entrega.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ReceptorModule,
    SolicitudModule,
    EntregaModule,
  ],
})
export class AppModule {}
