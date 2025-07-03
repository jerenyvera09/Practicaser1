import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { CreateSolicitudInput } from './dto/create-solicitud.input';
import { UpdateSolicitudInput } from './dto/update-solicitud.input';
import { Receptor } from 'src/receptor/entities/receptor.entity';

@Injectable()
export class SolicitudService {
constructor(
@InjectRepository(Solicitud)
private readonly solicitudRepository: Repository<Solicitud>,

@InjectRepository(Receptor)
private readonly receptorRepository: Repository<Receptor>,
) {}

async create(input: CreateSolicitudInput): Promise<Solicitud> {
const receptor = await this.receptorRepository.findOne({
where: { id_receptor: input.id_receptor },
});

if (!receptor) {
  throw new NotFoundException(`Receptor con ID ${input.id_receptor} no encontrado`);
}

const nueva = this.solicitudRepository.create({
  ...input,
  receptor,
});

return this.solicitudRepository.save(nueva);
}

findAll(): Promise<Solicitud[]> {
return this.solicitudRepository.find();
}

async findOne(id: string): Promise<Solicitud> {
const solicitud = await this.solicitudRepository.findOne({
where: { id_solicitud: id },
});

if (!solicitud) {
  throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
}

return solicitud;
}

async update(id: string, input: UpdateSolicitudInput): Promise<Solicitud> {
const solicitud = await this.solicitudRepository.preload({
...input,
id_solicitud: id,
});

if (!solicitud) {
  throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
}

return this.solicitudRepository.save(solicitud);
}

async remove(id: string): Promise<boolean> {
const solicitud = await this.solicitudRepository.findOne({
where: { id_solicitud: id },
});

if (!solicitud) {
  throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
}

await this.solicitudRepository.remove(solicitud);
return true;
}
}