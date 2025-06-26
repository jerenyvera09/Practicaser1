import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateReceptorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @Length(10, 10, { message: 'La cédula debe tener exactamente 10 dígitos' })
  @Matches(/^\d+$/, { message: 'La cédula solo debe contener números' })
  cedula: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @Length(10, 10, { message: 'El teléfono debe tener exactamente 10 dígitos' })
  @Matches(/^\d+$/, { message: 'El teléfono solo debe contener números' })
  telefono: string;
}
