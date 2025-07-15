import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateReceptorDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser texto' })
  @Length(3, 100, { message: 'El nombre debe tener entre 3 y 100 caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @IsString({ message: 'La dirección debe ser texto' })
  @Length(5, 150, {
    message: 'La dirección debe tener entre 5 y 150 caracteres',
  })
  direccion: string;

  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  @Matches(/^\d{10,15}$/, {
    message: 'El teléfono debe contener entre 10 y 15 dígitos numéricos',
  })
  telefono: string;
}
