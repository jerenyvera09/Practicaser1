import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private readonly entregaRepository: Repository<Entrega>,
  ) {}

  create(createEntregaDto: CreateEntregaDto) {
    const nueva = this.entregaRepository.create(createEntregaDto);
    return this.entregaRepository.save(nueva);
  }

  findAll() {
    return this.entregaRepository.find();
  }

  findOne(id: number) {
    return this.entregaRepository.findOneBy({ id });
  }

  async update(id: number, updateEntregaDto: UpdateEntregaDto) {
    const entrega = await this.findOne(id);
    if (!entrega) {
      throw new NotFoundException(`No se encontró la entrega con ID ${id}`);
    }
    return this.entregaRepository.update(id, updateEntregaDto);
  }

  async remove(id: number) {
    const entrega = await this.findOne(id);
    if (!entrega) {
      throw new NotFoundException(`No se encontró la entrega con ID ${id}`);
    }
    return this.entregaRepository.delete(id);
  }
}
