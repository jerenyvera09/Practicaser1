import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsEmail, IsString, IsDateString } from 'class-validator';
import { TipoUsuario } from './tipousuario.entity';

export enum Genero {
  MASCULINO = 'MASCULINO',
  FEMENINO = 'FEMENINO',
  OTRO = 'OTRO',
}

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  @IsNotEmpty()
  @IsString()
  nombres: string = '';

  @Column()
  @IsNotEmpty()
  @IsString()
  apellidos: string = '';

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  cedula: string = '';

  @Column()
  @IsNotEmpty()
  @IsEmail()
  correo: string = '';

  @Column()
  @IsNotEmpty()
  @IsString()
  telefono: string = '';

  @Column()
  @IsNotEmpty()
  @IsString()
  direccion: string = '';

  @Column()
  @IsNotEmpty()
  @IsDateString()
  fechaNacimiento: string = '';

  @Column({ type: 'enum', enum: Genero })
  @IsNotEmpty()
  genero: Genero = Genero.OTRO;

  @ManyToOne(() => TipoUsuario, { eager: true })
  tipoUsuario: TipoUsuario = new TipoUsuario();
}
