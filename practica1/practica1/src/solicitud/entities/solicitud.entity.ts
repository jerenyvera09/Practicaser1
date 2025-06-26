import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  descripcion: string;

  @Column()
  fecha: string;

  @Column()
  estado: string;
}
