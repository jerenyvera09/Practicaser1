import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudDto } from './create-solicitud.dto';
import { IsInt, Min } from 'class-validator';

export class UpdateSolicitudDto extends PartialType(CreateSolicitudDto) {
  @IsInt({ message: 'El ID debe ser un número entero' })
  @Min(1, { message: 'El ID debe ser mayor a 0' })
  id: number;
}
