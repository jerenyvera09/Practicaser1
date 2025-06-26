import { ReceptorService } from './receptor.service';
import { CreateReceptorDto } from './dto/create-receptor.dto';
import { UpdateReceptorDto } from './dto/update-receptor.dto';
export declare class ReceptorController {
    private readonly receptorService;
    constructor(receptorService: ReceptorService);
    create(createDto: CreateReceptorDto): Promise<import("./entities/receptor.entity").Receptor>;
    findAll(): Promise<import("./entities/receptor.entity").Receptor[]>;
    findOne(id: string): Promise<import("./entities/receptor.entity").Receptor | null>;
    update(id: string, updateDto: UpdateReceptorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
