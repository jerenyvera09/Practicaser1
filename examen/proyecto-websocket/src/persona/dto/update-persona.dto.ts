import { Genero } from '../entities/persona.entity';
import { TipoUsuario } from '../entities/tipousuario.entity';
import {
  IsEmail,
  IsString,
  IsDateString,
  IsOptional,
  Length,
  Matches,
  IsEnum,
} from 'class-validator';

export class UpdatePersonaDto {
  @IsOptional()
  @IsString()
  @Length(2, 50)
  nombres?: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  apellidos?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{10}$/)
  cedula?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{10}$/)
  telefono?: string;

  @IsOptional()
  @IsString()
  @Length(5, 200)
  direccion?: string;

  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsEnum(Genero)
  genero?: Genero;

  @IsOptional()
  @IsEnum(TipoUsuario)
  tipoUsuario?: TipoUsuario;
}
