import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReceptorService } from './receptor.service';
import { Receptor } from './entities/receptor.entity';
import { CreateReceptorInput } from './dto/create-receptor.input';
import { UpdateReceptorInput } from './dto/update-receptor.input';

@Resolver(() => Receptor)
export class ReceptorResolver {
  constructor(private readonly receptorService: ReceptorService) {}

  @Mutation(() => Receptor)
  createReceptor(
    @Args('createReceptorInput') createReceptorInput: CreateReceptorInput,
  ): Promise<Receptor> {
    return this.receptorService.create(createReceptorInput);
  }

  @Query(() => [Receptor], { name: 'receptores' })
  findAll(): Promise<Receptor[]> {
    return this.receptorService.findAll();
  }

  @Query(() => Receptor, { name: 'receptor' })
  findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Receptor> {
    return this.receptorService.findOne(id);
  }

  @Mutation(() => Receptor)
  updateReceptor(
    @Args('id', { type: () => String }) id: string,
    @Args('updateReceptorInput') updateReceptorInput: UpdateReceptorInput,
  ): Promise<Receptor> {
    return this.receptorService.update(id, updateReceptorInput);
  }

  @Mutation(() => Boolean)
  removeReceptor(
    @Args('id', { type: () => String }) id: string,
  ): Promise<boolean> {
    return this.receptorService.remove(id).then(() => true);
  }
}
