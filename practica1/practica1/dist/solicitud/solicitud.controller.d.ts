import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
export declare class SolicitudController {
    private readonly solicitudService;
    constructor(solicitudService: SolicitudService);
    create(createSolicitudDto: CreateSolicitudDto): Promise<import("./entities/solicitud.entity").Solicitud>;
    findAll(): Promise<import("./entities/solicitud.entity").Solicitud[]>;
    findOne(id: string): Promise<import("./entities/solicitud.entity").Solicitud | null>;
    update(id: string, updateSolicitudDto: UpdateSolicitudDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
