import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  nombreTipo: string = '';
}
