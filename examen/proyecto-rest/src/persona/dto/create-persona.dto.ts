import { Genero } from '../persona.entity';
import { TipoUsuario } from '../tipousuario.entity';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsDateString,
  Length,
  Matches,
  IsEnum,
} from 'class-validator';

export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  nombres: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{10}$/)
  cedula: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{10}$/)
  telefono: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 200)
  direccion: string;

  @IsNotEmpty()
  @IsDateString()
  fechaNacimiento: string;

  @IsNotEmpty()
  @IsEnum(Genero)
  genero: Genero;

  @IsNotEmpty()
  @IsEnum(TipoUsuario)
  tipoUsuario: TipoUsuario;
}
