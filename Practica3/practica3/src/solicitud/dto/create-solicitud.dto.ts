import { IsNotEmpty, IsString, Length, IsInt, Min } from 'class-validator';

export class CreateSolicitudDto {
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @IsString({ message: 'La descripción debe ser texto' })
  @Length(10, 200, { message: 'La descripción debe tener entre 10 y 200 caracteres' })
  descripcion: string;

  @IsNotEmpty({ message: 'El estado es obligatorio' })
  @IsString({ message: 'El estado debe ser texto' })
  @Length(3, 20, { message: 'El estado debe tener entre 3 y 20 caracteres' })
  estado: string;

  @IsNotEmpty({ message: 'El receptorId es obligatorio' })
  @IsInt({ message: 'El receptorId debe ser un número entero' })
  @Min(1, { message: 'El receptorId debe ser mayor a 0' })
  receptorId: number;
}
