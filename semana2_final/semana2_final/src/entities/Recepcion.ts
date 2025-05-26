import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Donacion } from "./Donacion";

@Entity()
export class Recepcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Donacion)
  @JoinColumn({ name: "id_donacion" })
  donacion!: Donacion;

  @Column()
  id_solicitud!: number;

  @Column({ type: "date" })
  fecha_entrega!: Date;

  @Column()
  observaciones!: string;
}
