import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receptor } from './entities/receptor.entity';
import { CreateReceptorInput } from './dto/create-receptor.input';
import { UpdateReceptorInput } from './dto/update-receptor.input';

@Injectable()
export class ReceptorService {
  constructor(
    @InjectRepository(Receptor)
    private readonly receptorRepository: Repository<Receptor>,
  ) {}

  create(createReceptorInput: CreateReceptorInput): Promise<Receptor> {
    const nuevo = this.receptorRepository.create(createReceptorInput);
    return this.receptorRepository.save(nuevo);
  }

  findAll(): Promise<Receptor[]> {
    return this.receptorRepository.find();
  }

  async findOne(id: string): Promise<Receptor> {
    const receptor = await this.receptorRepository.findOne({
      where: { id_receptor: id },
    });
    if (!receptor) {
      throw new NotFoundException(`Receptor con ID ${id} no encontrado`);
    }
    return receptor;
  }

  async update(id: string, updateReceptorInput: UpdateReceptorInput): Promise<Receptor> {
    const receptor = await this.receptorRepository.preload({
      ...updateReceptorInput,
      id_receptor: id,
    });
    if (!receptor) {
      throw new NotFoundException(`Receptor con ID ${id} no encontrado`);
    }
    return this.receptorRepository.save(receptor);
  }

  async remove(id: string): Promise<{ removed: string }> {
    const receptor = await this.receptorRepository.findOne({
      where: { id_receptor: id },
    });
    if (!receptor) {
      throw new NotFoundException(`Receptor con ID ${id} no encontrado`);
    }
    await this.receptorRepository.remove(receptor);
    return { removed: id };
  }
}
