import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TipoDonacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  descripcion!: string;
}
