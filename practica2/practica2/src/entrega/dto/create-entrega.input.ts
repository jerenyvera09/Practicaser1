import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateEntregaInput {
@Field(() => ID)
@IsString()
@IsNotEmpty()
id_solicitud: string;

@Field(() => Int)
@IsInt()
@IsNotEmpty()
id_donacion: number;

@Field()
@IsDateString()
@IsNotEmpty()
fecha_entrega: string;

@Field()
@IsString()
@IsNotEmpty()
observacion: string;
}