import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
export declare class SolicitudService {
    private readonly solicitudRepository;
    constructor(solicitudRepository: Repository<Solicitud>);
    create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud>;
    findAll(): Promise<Solicitud[]>;
    findOne(id: number): Promise<Solicitud | null>;
    update(id: number, updateSolicitudDto: UpdateSolicitudDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
