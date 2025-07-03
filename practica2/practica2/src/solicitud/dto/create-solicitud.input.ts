import { InputType, Field, ID } from '@nestjs/graphql';
import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSolicitudInput {
@Field(() => ID)
@IsNotEmpty()
@IsString()
id_receptor: string;

@Field()
@IsString()
@IsNotEmpty()
tipo_solicitud: string;

@Field()
@IsDateString()
@IsNotEmpty()
fecha_solicitud: string;

@Field()
@IsIn(['pendiente', 'asignada', 'completada'])
estado: string;

@Field()
@IsString()
@IsNotEmpty()
descripcion: string;
}