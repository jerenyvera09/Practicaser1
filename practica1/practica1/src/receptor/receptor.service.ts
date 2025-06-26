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

  create(createDto: CreateReceptorDto) {
    const nuevo = this.receptorRepository.create(createDto);
    return this.receptorRepository.save(nuevo);
  }

  findAll() {
    return this.receptorRepository.find();
  }

  findOne(id: number) {
    return this.receptorRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateReceptorDto) {
    const receptor = await this.findOne(id);
    if (!receptor) {
      throw new NotFoundException(`No se encontró el receptor con ID ${id}`);
    }
    return this.receptorRepository.update(id, updateDto);
  }

  async remove(id: number) {
    const receptor = await this.findOne(id);
    if (!receptor) {
      throw new NotFoundException(`No se encontró el receptor con ID ${id}`);
    }
    return this.receptorRepository.delete(id);
  }
}
