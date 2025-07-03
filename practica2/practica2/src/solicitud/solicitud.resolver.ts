import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SolicitudService } from './solicitud.service';
import { Solicitud } from './entities/solicitud.entity';
import { CreateSolicitudInput } from './dto/create-solicitud.input';
import { UpdateSolicitudInput } from './dto/update-solicitud.input';

@Resolver(() => Solicitud)
export class SolicitudResolver {
constructor(private readonly solicitudService: SolicitudService) {}

@Mutation(() => Solicitud)
createSolicitud(
@Args('createSolicitudInput') createSolicitudInput: CreateSolicitudInput,
): Promise<Solicitud> {
return this.solicitudService.create(createSolicitudInput);
}

@Query(() => [Solicitud], { name: 'solicitudes' })
findAll(): Promise<Solicitud[]> {
return this.solicitudService.findAll();
}

@Query(() => Solicitud, { name: 'solicitud' })
findOne(@Args('id', { type: () => String }) id: string): Promise<Solicitud> {
return this.solicitudService.findOne(id);
}

@Mutation(() => Solicitud)
updateSolicitud(
@Args('id', { type: () => String }) id: string,
@Args('updateSolicitudInput') updateSolicitudInput: UpdateSolicitudInput,
): Promise<Solicitud> {
return this.solicitudService.update(id, updateSolicitudInput);
}

@Mutation(() => Boolean)
removeSolicitud(@Args('id', { type: () => String }) id: string): Promise<boolean> {
return this.solicitudService.remove(id);
}
}