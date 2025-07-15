import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receptor } from './entities/receptor.entity';
import { CreateReceptorDto } from './dto/create-receptor.dto';
import { UpdateReceptorDto } from './dto/update-receptor.dto';

@Injectable()
export class ReceptorService {
  constructor(
    @InjectRepository(Receptor)
    private readonly receptorRepository: Repository<Receptor>,
  ) {}

  // ✅ Crear un nuevo receptor
  async create(createReceptorDto: CreateReceptorDto): Promise<Receptor> {
    const newReceptor = this.receptorRepository.create(createReceptorDto);
    return await this.receptorRepository.save(newReceptor);
  }

  // ✅ Listar todos los receptores
  async findAll(): Promise<Receptor[]> {
    return await this.receptorRepository.find({
      relations: ['solicitudes'], // Para incluir las solicitudes relacionadas
    });
  }

  // ✅ Buscar un receptor por ID
  async findOne(id: number): Promise<Receptor> {
    const receptor = await this.receptorRepository.findOne({
      where: { id },
      relations: ['solicitudes'],
    });
    if (!receptor) {
      throw new NotFoundException(`Receptor con ID ${id} no encontrado`);
    }
    return receptor;
  }

  // ✅ Actualizar receptor
  async update(id: number, dto: UpdateReceptorDto): Promise<Receptor> {
    const receptor = await this.findOne(id);
    Object.assign(receptor, dto);
    return await this.receptorRepository.save(receptor);
  }

  // ✅ Eliminar receptor
  async remove(id: number): Promise<void> {
    const receptor = await this.findOne(id);
    await this.receptorRepository.remove(receptor);
  }
}
