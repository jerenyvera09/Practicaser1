import { EntregaService } from './entrega.service';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
export declare class EntregaController {
    private readonly entregaService;
    constructor(entregaService: EntregaService);
    create(createEntregaDto: CreateEntregaDto): Promise<import("./entities/entrega.entity").Entrega>;
    findAll(): Promise<import("./entities/entrega.entity").Entrega[]>;
    findOne(id: number): Promise<import("./entities/entrega.entity").Entrega | null>;
    update(id: number, updateEntregaDto: UpdateEntregaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
