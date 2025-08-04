import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ValidationPipe } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from '../../../shared-domain/src/entities/persona.entity';
import { CreatePersonaDto } from '../../../shared-domain/src/dtos/create-persona.dto';
import { UpdatePersonaDto } from '../../../shared-domain/src/dtos/update-persona.dto';

@Resolver(() => Persona)
export class PersonaResolver {
  constructor(private readonly personaService: PersonaService) {}

  @Query(() => [Persona])
  async personas() {
    return this.personaService.findAll();
  }

  @Query(() => Persona)
  async persona(@Args('id') id: number) {
    return this.personaService.findOne(id);
  }

  @Mutation(() => Persona)
  async createPersona(
    @Args('input', new ValidationPipe()) input: CreatePersonaDto
  ) {
    return this.personaService.create(input);
  }

  @Mutation(() => Persona)
  async updatePersona(
    @Args('id') id: number,
    @Args('input', new ValidationPipe()) input: UpdatePersonaDto
  ) {
    return this.personaService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deletePersona(@Args('id') id: number) {
    return this.personaService.remove(id);
  }
}
