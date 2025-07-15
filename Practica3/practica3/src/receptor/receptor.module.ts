import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receptor } from './entities/receptor.entity';
import { ReceptorService } from './receptor.service';
import { ReceptorGateway } from './receptor.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Receptor])],
  providers: [ReceptorService, ReceptorGateway],
  exports: [ReceptorService],
})
export class ReceptorModule {}
