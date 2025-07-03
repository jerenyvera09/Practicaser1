import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateReceptorInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  cedula: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  correo: string;
}
