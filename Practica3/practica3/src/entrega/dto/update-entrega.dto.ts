import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregaDto } from './create-entrega.dto';
import { IsInt, Min } from 'class-validator';

export class UpdateEntregaDto extends PartialType(CreateEntregaDto) {
  @IsInt({ message: 'El ID debe ser un número entero' })
  @Min(1, { message: 'El ID debe ser mayor a 0' })
  id: number;
}
