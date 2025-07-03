import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ReceptorModule } from './receptor/receptor.module'; // ✅ Tu módulo actual
import { SolicitudModule } from './solicitud/solicitud.module';
import { EntregaModule } from './entrega/entrega.module';

@Module({
  imports: [
    // GraphQL configurado en modo code first
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    // Variables de entorno (.env)
    ConfigModule.forRoot(),

    // Base de datos con SQLite (usando DATABASE desde .env)
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),

    // Módulo de Receptor (agrega aquí otros módulos como Solicitud, Entrega)
    ReceptorModule,

    SolicitudModule,

    EntregaModule,
  ],
})
export class AppModule {}
