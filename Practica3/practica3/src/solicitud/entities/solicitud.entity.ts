import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Receptor } from '../../receptor/entities/receptor.entity';
import { Entrega } from '../../entrega/entities/entrega.entity';

@Entity('solicitud')
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  estado: string;

  @ManyToOne(() => Receptor, (receptor) => receptor.solicitudes, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'receptor_id' })
  receptor: Receptor;

  // ✅ Relación con Entrega
  @OneToMany(() => Entrega, (entrega) => entrega.solicitud, { cascade: true })
  entregas: Entrega[];
}
