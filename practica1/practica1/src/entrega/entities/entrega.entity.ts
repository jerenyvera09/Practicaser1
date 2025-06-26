import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  fechaEntrega: string;

  @Column()
  estado: string;
}
