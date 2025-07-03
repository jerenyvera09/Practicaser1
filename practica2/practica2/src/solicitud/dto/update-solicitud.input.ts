import { CreateSolicitudInput } from './create-solicitud.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSolicitudInput extends PartialType(CreateSolicitudInput) {
@Field(() => ID)
id_solicitud: string;
}