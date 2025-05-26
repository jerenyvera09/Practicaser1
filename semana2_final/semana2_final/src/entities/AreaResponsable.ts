import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Donacion } from "./Donacion";

@Entity()
export class AreaResponsable {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  nombre!: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  encargado?: string;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  @OneToMany(() => Donacion, (donacion) => donacion.areaResponsable)
  donaciones!: Donacion[];
}
