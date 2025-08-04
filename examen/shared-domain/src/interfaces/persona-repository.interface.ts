import { Persona } from '../entities';
import { CreatePersonaDto, UpdatePersonaDto } from '../dtos';

export interface IPersonaRepository {
  findAll(): Promise<Persona[]>;
  findById(id: string): Promise<Persona | null>;
  findByCedula(cedula: string): Promise<Persona | null>;
  findByCorreo(correo: string): Promise<Persona | null>;
  create(createPersonaDto: CreatePersonaDto): Promise<Persona>;
  update(id: string, updatePersonaDto: UpdatePersonaDto): Promise<Persona | null>;
  delete(id: string): Promise<boolean>;
}
