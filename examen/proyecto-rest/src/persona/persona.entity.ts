export enum Genero {
  MASCULINO = 'MASCULINO',
  FEMENINO = 'FEMENINO',
  OTRO = 'OTRO',
}


import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsEmail, IsString, IsDateString } from 'class-validator';
import { TipoUsuario } from './tipousuario.entity';

@Entity()
// Entidad Persona
// Define la estructura de datos y persistencia para el recurso Persona
// Relacionado con: Definición del Modelo, Servicios y Persistencia
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  nombres: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  cedula: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @Column()
  @IsNotEmpty()
  @IsDateString()
  fechaNacimiento: string;

  @Column({ type: 'enum', enum: Genero })
  @IsNotEmpty()
  genero: Genero;

  @ManyToOne(() => TipoUsuario)
  @IsNotEmpty()
  tipoUsuario: TipoUsuario;
}
