import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { Receptor } from '../receptor/entities/receptor.entity';

@Injectable()
export class SolicitudService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly solicitudRepository: Repository<Solicitud>,

    @InjectRepository(Receptor)
    private readonly receptorRepository: Repository<Receptor>,
  ) {}

  // ✅ Crear una nueva solicitud
  async create(dto: CreateSolicitudDto): Promise<Solicitud> {
    const receptor = await this.receptorRepository.findOne({
      where: { id: dto.receptorId },
    });
    if (!receptor) {
      throw new NotFoundException(`Receptor con ID ${dto.receptorId} no encontrado`);
    }

    const solicitud = this.solicitudRepository.create({
      descripcion: dto.descripcion,
      estado: dto.estado,
      receptor,
    });

    return await this.solicitudRepository.save(solicitud);
  }

  // ✅ Listar todas las solicitudes (con relación)
  async findAll(): Promise<Solicitud[]> {
    return await this.solicitudRepository.find({
      relations: ['receptor'], // Incluye datos del receptor
    });
  }

  // ✅ Buscar una solicitud por ID (con relación)
  async findOne(id: number): Promise<Solicitud> {
    const solicitud = await this.solicitudRepository.findOne({
      where: { id },
      relations: ['receptor'], // Incluye datos del receptor
    });
    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
    }
    return solicitud;
  }

  // ✅ Actualizar una solicitud (incluye cambio de receptor)
  async update(id: number, dto: UpdateSolicitudDto): Promise<Solicitud> {
    const solicitud = await this.findOne(id);

    if (dto.receptorId) {
      const receptor = await this.receptorRepository.findOne({
        where: { id: dto.receptorId },
      });
      if (!receptor) {
        throw new NotFoundException(`Receptor con ID ${dto.receptorId} no encontrado`);
      }
      solicitud.receptor = receptor;
    }

    Object.assign(solicitud, dto);
    return await this.solicitudRepository.save(solicitud);
  }

  // ✅ Eliminar una solicitud
  async remove(id: number): Promise<void> {
    const solicitud = await this.findOne(id);
    await this.solicitudRepository.remove(solicitud);
  }
}
