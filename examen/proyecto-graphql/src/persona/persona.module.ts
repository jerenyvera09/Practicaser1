import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from '../../../shared-domain/src/entities/persona.entity';
import { PersonaService } from './persona.service';
import { PersonaResolver } from './persona.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  providers: [PersonaService, PersonaResolver],
})
export class PersonaModule {}
