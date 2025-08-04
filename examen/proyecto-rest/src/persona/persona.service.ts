import { Injectable } from '@nestjs/common';
import { Persona } from './persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';

@Injectable()
export class PersonaService {
  private personas: Persona[] = [];
  private idCounter = 1;
// Servicio para la gestión de Personas
// Aquí se implementa la lógica de negocio y persistencia
// Relacionado con: Definición del Modelo, Servicios y Persistencia

  create(createPersonaDto: CreatePersonaDto): Persona {
    const persona: Persona = {
      id: this.idCounter++,
      ...createPersonaDto,
    };
    this.personas.push(persona);
    return persona;
  }

  findAll(): Persona[] {
    return this.personas;
  }
}
