import { IsEmail, IsEnum, IsNotEmpty, IsString, IsDateString, Length, Matches } from 'class-validator';
import { Genero, TipoUsuario } from '../enums';

export class CreatePersonaDto {
  @IsNotEmpty({ message: 'Los nombres son obligatorios' })
  @IsString({ message: 'Los nombres deben ser texto' })
  @Length(2, 50, { message: 'Los nombres deben tener entre 2 y 50 caracteres' })
  nombres: string = '';

  @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
  @IsString({ message: 'Los apellidos deben ser texto' })
  @Length(2, 50, { message: 'Los apellidos deben tener entre 2 y 50 caracteres' })
  apellidos: string = '';

  @IsNotEmpty({ message: 'La cédula es obligatoria' })
  @IsString({ message: 'La cédula debe ser texto' })
  @Matches(/^\d{10}$/, { message: 'La cédula debe tener 10 dígitos' })
  cedula: string = '';

  @IsNotEmpty({ message: 'El correo es obligatorio' })
  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  correo: string = '';

  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  @IsString({ message: 'El teléfono debe ser texto' })
  @Matches(/^\d{10}$/, { message: 'El teléfono debe tener 10 dígitos' })
  telefono: string = '';

  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @IsString({ message: 'La dirección debe ser texto' })
  @Length(5, 200, { message: 'La dirección debe tener entre 5 y 200 caracteres' })
  direccion: string = '';

  @IsNotEmpty({ message: 'La fecha de nacimiento es obligatoria' })
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida' })
  fechaNacimiento: string = '';

  @IsNotEmpty({ message: 'El género es obligatorio' })
  @IsEnum(Genero, { message: 'El género debe ser MASCULINO, FEMENINO u OTRO' })
  genero: Genero = Genero.OTRO;

  @IsNotEmpty({ message: 'El tipo de usuario es obligatorio' })
  @IsEnum(TipoUsuario, { message: 'El tipo de usuario debe ser DOCENTE, ADMINISTRATIVO o ESTUDIANTE' })
  tipoUsuario: TipoUsuario = TipoUsuario.ESTUDIANTE;
}
