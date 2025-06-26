import { IsNotEmpty, IsString, IsIn, IsDateString, } from 'class-validator';

export class CreateEntregaDto {
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'fechaEntrega debe tener formato válido (YYYY-MM-DD)' })
  fechaEntrega: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['pendiente', 'entregado', 'cancelado'] as const, {
    message: 'estado debe ser pendiente, entregado o cancelado',
  })
  estado: string;
}
