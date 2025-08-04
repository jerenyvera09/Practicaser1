import { Persona } from '../entities';
import { CreatePersonaDto, UpdatePersonaDto } from '../dtos';

export interface IPersonaService {
  getAllPersonas(): Promise<Persona[]>;
  getPersonaById(id: string): Promise<Persona>;
  getPersonaByCedula(cedula: string): Promise<Persona>;
  getPersonaByCorreo(correo: string): Promise<Persona>;
  createPersona(createPersonaDto: CreatePersonaDto): Promise<Persona>;
  updatePersona(id: string, updatePersonaDto: UpdatePersonaDto): Promise<Persona>;
  deletePersona(id: string): Promise<void>;
  validateUniqueFields(cedula: string, correo: string, excludeId?: string): Promise<void>;
}
