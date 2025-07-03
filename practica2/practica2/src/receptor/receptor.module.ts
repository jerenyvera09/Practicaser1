import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceptorService } from './receptor.service';
import { ReceptorResolver } from './receptor.resolver';
import { Receptor } from './entities/receptor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receptor])],
  providers: [ReceptorResolver, ReceptorService],
  exports: [TypeOrmModule], // Exporta TypeOrmModule para que Receptor se use en otros módulos
})
export class ReceptorModule {}
