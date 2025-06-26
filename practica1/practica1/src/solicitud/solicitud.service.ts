import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@Injectable()
export class SolicitudService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly solicitudRepository: Repository<Solicitud>,
  ) {}

  create(createSolicitudDto: CreateSolicitudDto) {
    const nueva = this.solicitudRepository.create(createSolicitudDto);
    return this.solicitudRepository.save(nueva);
  }

  findAll() {
    return this.solicitudRepository.find();
  }

  findOne(id: number) {
    return this.solicitudRepository.findOneBy({ id });
  }

  async update(id: number, updateSolicitudDto: UpdateSolicitudDto) {
    const solicitud = await this.findOne(id);
    if (!solicitud) {
      throw new NotFoundException(`No se encontró la solicitud con ID ${id}`);
    }
    return this.solicitudRepository.update(id, updateSolicitudDto);
  }

  async remove(id: number) {
    const solicitud = await this.findOne(id);
    if (!solicitud) {
      throw new NotFoundException(`No se encontró la solicitud con ID ${id}`);
    }
    return this.solicitudRepository.delete(id);
  }
}
