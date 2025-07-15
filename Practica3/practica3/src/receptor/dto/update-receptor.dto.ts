import { PartialType } from '@nestjs/mapped-types';
import { CreateReceptorDto } from './create-receptor.dto';
import { IsInt, Min } from 'class-validator';

export class UpdateReceptorDto extends PartialType(CreateReceptorDto) {
  @IsInt({ message: 'El ID debe ser un número entero' })
  @Min(1, { message: 'El ID debe ser mayor a 0' })
  id: number;
}
