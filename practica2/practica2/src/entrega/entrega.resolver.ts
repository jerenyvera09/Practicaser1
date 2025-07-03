import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EntregaService } from './entrega.service';
import { Entrega } from './entities/entrega.entity';
import { CreateEntregaInput } from './dto/create-entrega.input';
import { UpdateEntregaInput } from './dto/update-entrega.input';

@Resolver(() => Entrega)
export class EntregaResolver {
constructor(private readonly entregaService: EntregaService) {}

@Mutation(() => Entrega)
createEntrega(
@Args('createEntregaInput') createEntregaInput: CreateEntregaInput,
): Promise<Entrega> {
return this.entregaService.create(createEntregaInput);
}

@Query(() => [Entrega], { name: 'entregas' })
findAll(): Promise<Entrega[]> {
return this.entregaService.findAll();
}

@Query(() => Entrega, { name: 'entrega' })
findOne(@Args('id', { type: () => String }) id: string): Promise<Entrega> {
return this.entregaService.findOne(id);
}

@Mutation(() => Entrega)
updateEntrega(
@Args('id', { type: () => String }) id: string,
@Args('updateEntregaInput') updateEntregaInput: UpdateEntregaInput,
): Promise<Entrega> {
return this.entregaService.update(id, updateEntregaInput);
}

@Mutation(() => Boolean)
removeEntrega(@Args('id', { type: () => String }) id: string): Promise<boolean> {
return this.entregaService.remove(id).then(() => true);
}
}