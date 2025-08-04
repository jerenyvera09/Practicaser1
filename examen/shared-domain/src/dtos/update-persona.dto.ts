import { IsEmail, IsEnum, IsOptional, IsString, IsDateString, Length, Matches } from 'class-validator';
import { Genero, TipoUsuario } from '../enums';

export class UpdatePersonaDto {
  @IsOptional()
  @IsString({ message: 'Los nombres deben ser texto' })
  @Length(2, 50, { message: 'Los nombres deben tener entre 2 y 50 caracteres' })
  nombres?: string;

  @IsOptional()
  @IsString({ message: 'Los apellidos deben ser texto' })
  @Length(2, 50, { message: 'Los apellidos deben tener entre 2 y 50 caracteres' })
  apellidos?: string;

  @IsOptional()
  @IsString({ message: 'La cédula debe ser texto' })
  @Matches(/^\d{10}$/, { message: 'La cédula debe tener 10 dígitos' })
  cedula?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  correo?: string;

  @IsOptional()
  @IsString({ message: 'El teléfono debe ser texto' })
  @Matches(/^\d{10}$/, { message: 'El teléfono debe tener 10 dígitos' })
  telefono?: string;

  @IsOptional()
  @IsString({ message: 'La dirección debe ser texto' })
  @Length(5, 200, { message: 'La dirección debe tener entre 5 y 200 caracteres' })
  direccion?: string;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida' })
  fechaNacimiento?: string;

  @IsOptional()
  @IsEnum(Genero, { message: 'El género debe ser MASCULINO, FEMENINO u OTRO' })
  genero?: Genero;

  @IsOptional()
  @IsEnum(TipoUsuario, { message: 'El tipo de usuario debe ser DOCENTE, ADMINISTRATIVO o ESTUDIANTE' })
  tipoUsuario?: TipoUsuario;
}
