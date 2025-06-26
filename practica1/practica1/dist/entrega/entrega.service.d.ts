import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
export declare class EntregaService {
    private readonly entregaRepository;
    constructor(entregaRepository: Repository<Entrega>);
    create(createEntregaDto: CreateEntregaDto): Promise<Entrega>;
    findAll(): Promise<Entrega[]>;
    findOne(id: number): Promise<Entrega | null>;
    update(id: number, updateEntregaDto: UpdateEntregaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
