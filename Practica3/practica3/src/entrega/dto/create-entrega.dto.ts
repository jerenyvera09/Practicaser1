import { IsNotEmpty, IsString, Length, IsDateString, IsInt, Min } from 'class-validator';

export class CreateEntregaDto {
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @IsString({ message: 'La descripción debe ser texto' })
  @Length(5, 150, { message: 'La descripción debe tener entre 5 y 150 caracteres' })
  descripcion: string;

  @IsNotEmpty({ message: 'La fecha de entrega es obligatoria' })
  @IsDateString({}, { message: 'La fecha de entrega debe tener formato válido (YYYY-MM-DD)' })
  fechaEntrega: string;

  @IsNotEmpty({ message: 'El estado es obligatorio' })
  @IsString({ message: 'El estado debe ser texto' })
  @Length(3, 50, { message: 'El estado debe tener entre 3 y 50 caracteres' })
  estado: string;

  @IsInt({ message: 'El ID de la solicitud debe ser un número entero' })
  @Min(1, { message: 'El ID de la solicitud debe ser mayor a 0' })
  solicitudId: number;
}

