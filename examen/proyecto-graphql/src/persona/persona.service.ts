import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from 'shared-domain/src/entities/persona.entity';
import { CreatePersonaDto } from 'shared-domain/src/dtos/create-persona.dto';
import { UpdatePersonaDto } from 'shared-domain/src/dtos/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find({ relations: ['tipoUsuario'] });
  }

  async findOne(id: number): Promise<Persona> {
    return this.personaRepository.findOne({ where: { id }, relations: ['tipoUsuario'] });
  }

  async create(data: CreatePersonaDto): Promise<Persona> {
    const persona = this.personaRepository.create(data);
    return this.personaRepository.save(persona);
  }

  async update(id: number, data: UpdatePersonaDto): Promise<Persona> {
    await this.personaRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.personaRepository.delete(id);
    return result.affected > 0;
  }
}
