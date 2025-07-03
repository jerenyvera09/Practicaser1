import { CreateReceptorInput } from './create-receptor.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReceptorInput extends PartialType(CreateReceptorInput) {
  @Field(() => String)
  id_receptor: string;
}
