import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaInput } from './dto/create-entrega.input';
import { UpdateEntregaInput } from './dto/update-entrega.input';
import { Solicitud } from 'src/solicitud/entities/solicitud.entity';

@Injectable()
export class EntregaService {
constructor(
@InjectRepository(Entrega)
private readonly entregaRepository: Repository<Entrega>,

@InjectRepository(Solicitud)
private readonly solicitudRepository: Repository<Solicitud>,
) {}

async create(createEntregaInput: CreateEntregaInput): Promise<Entrega> {
const { id_solicitud, ...resto } = createEntregaInput;

const solicitud = await this.solicitudRepository.findOne({
  where: { id_solicitud },
});

if (!solicitud) {
  throw new NotFoundException(`Solicitud con ID ${id_solicitud} no encontrada`);
}

const nueva = this.entregaRepository.create({
  ...resto,
  solicitud,
});

return this.entregaRepository.save(nueva);
}

findAll(): Promise<Entrega[]> {
return this.entregaRepository.find();
}

async findOne(id: string): Promise<Entrega> {
const entrega = await this.entregaRepository.findOne({
where: { id_entrega: id },
});
if (!entrega) {
throw new NotFoundException(`Entrega con ID ${id} no encontrada`);
}
return entrega;
}

async update(id: string, updateEntregaInput: UpdateEntregaInput): Promise<Entrega> {
const entrega = await this.entregaRepository.preload({
id_entrega: id,
...updateEntregaInput,
});
if (!entrega) {
throw new NotFoundException(`Entrega con ID ${id} no encontrada`);
}
return this.entregaRepository.save(entrega);
}

async remove(id: string): Promise<{ removed: string }> {
const entrega = await this.entregaRepository.findOne({
where: { id_entrega: id },
});
if (!entrega) {
throw new NotFoundException(`Entrega con ID ${id} no encontrada`);
}
await this.entregaRepository.remove(entrega);
return { removed: id };
}
}