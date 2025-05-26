import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Donacion } from "./Donacion";

@Entity()
export class Prioridad {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nivel!: string;

  @Column({ nullable: true })
  descripcion?: string;

  @OneToMany(() => Donacion, (donacion) => donacion.prioridad)
  donaciones!: Donacion[];
}
