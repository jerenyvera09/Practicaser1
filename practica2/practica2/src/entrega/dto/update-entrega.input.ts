import { CreateEntregaInput } from './create-entrega.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEntregaInput extends PartialType(CreateEntregaInput) {}