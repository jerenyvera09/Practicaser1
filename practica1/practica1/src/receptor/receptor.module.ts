import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receptor } from './entities/receptor.entity';
import { ReceptorService } from './receptor.service';
import { ReceptorController } from './receptor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Receptor])],
  controllers: [ReceptorController],
  providers: [ReceptorService],
  exports: [TypeOrmModule], //  necesario para futuras relaciones
})
export class ReceptorModule {}
