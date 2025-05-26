import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { TipoDonacion } from "./TipoDonacion";
import { AreaResponsable } from "./AreaResponsable";
import { Prioridad } from "./Prioridad";

@Entity()
export class Donacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => TipoDonacion)
  @JoinColumn({ name: "id_tipo" })
  tipo!: TipoDonacion;

  @ManyToOne(() => AreaResponsable, (area) => area.donaciones)
  @JoinColumn({ name: "id_area_responsable" })
  areaResponsable!: AreaResponsable;

  @ManyToOne(() => Prioridad, (prioridad) => prioridad.donaciones)
  @JoinColumn({ name: "id_prioridad" })
  prioridad!: Prioridad;

  @Column({ type: "date" })
  fecha!: Date;

  @Column()
  estado!: string;

  @Column()
  descripcion!: string;
}
