import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
import { Solicitud } from '../solicitud/entities/solicitud.entity';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private readonly entregaRepository: Repository<Entrega>,

    @InjectRepository(Solicitud)
    private readonly solicitudRepository: Repository<Solicitud>,
  ) {}

  async create(dto: CreateEntregaDto): Promise<Entrega> {
    const solicitud = await this.solicitudRepository.findOne({ where: { id: dto.solicitudId } });
    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${dto.solicitudId} no encontrada`);
    }

    const entrega = this.entregaRepository.create({
      descripcion: dto.descripcion,
      fechaEntrega: new Date(dto.fechaEntrega),
      estado: dto.estado,
      solicitud,
    });

    return await this.entregaRepository.save(entrega);
  }

  async findAll(): Promise<Entrega[]> {
    return await this.entregaRepository.find();
  }

  async findOne(id: number): Promise<Entrega> {
    const entrega = await this.entregaRepository.findOne({ where: { id } });
    if (!entrega) {
      throw new NotFoundException(`Entrega con ID ${id} no encontrada`);
    }
    return entrega;
  }

  async update(id: number, dto: UpdateEntregaDto): Promise<Entrega> {
    const entrega = await this.findOne(id);

    if (dto.solicitudId) {
      const solicitud = await this.solicitudRepository.findOne({ where: { id: dto.solicitudId } });
      if (!solicitud) {
        throw new NotFoundException(`Solicitud con ID ${dto.solicitudId} no encontrada`);
      }
      entrega.solicitud = solicitud;
    }

    Object.assign(entrega, dto);
    return await this.entregaRepository.save(entrega);
  }

  async remove(id: number): Promise<void> {
    const entrega = await this.findOne(id);
    await this.entregaRepository.remove(entrega);
  }
}

