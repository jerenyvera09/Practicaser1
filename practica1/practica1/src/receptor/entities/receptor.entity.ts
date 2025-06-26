import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Receptor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cedula: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;
}