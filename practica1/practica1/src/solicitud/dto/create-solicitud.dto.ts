import { IsNotEmpty, IsString, IsIn, IsDateString } from 'class-validator';

export class CreateSolicitudDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'La fecha debe tener formato válido (YYYY-MM-DD)' })
  fecha: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['pendiente', 'aprobada', 'rechazada'], {
    message: 'Estado debe ser pendiente, aprobada o rechazada',
  })
  estado: string;
}
