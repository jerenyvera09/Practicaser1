import { Controller, Post, Body, Get } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { Persona } from './persona.entity';

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto): Persona {
    return this.personaService.create(createPersonaDto);
  }

  @Get()
  findAll(): Persona[] {
    return this.personaService.findAll();
  }
}
