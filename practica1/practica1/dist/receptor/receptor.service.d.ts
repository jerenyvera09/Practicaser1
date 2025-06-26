import { Repository } from 'typeorm';
import { Receptor } from './entities/receptor.entity';
import { CreateReceptorDto } from './dto/create-receptor.dto';
import { UpdateReceptorDto } from './dto/update-receptor.dto';
export declare class ReceptorService {
    private readonly receptorRepository;
    constructor(receptorRepository: Repository<Receptor>);
    create(createDto: CreateReceptorDto): Promise<Receptor>;
    findAll(): Promise<Receptor[]>;
    findOne(id: number): Promise<Receptor | null>;
    update(id: number, updateDto: UpdateReceptorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
