import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Solicitud } from '../../solicitud/entities/solicitud.entity';

@Entity('entregas')
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  descripcion: string;

  @Column({ type: 'date', nullable: false })
  fechaEntrega: Date;

  @Column({ type: 'varchar', length: 50, nullable: false })
  estado: string;

  // Relación con Solicitud
  @ManyToOne(() => Solicitud, (solicitud) => solicitud.entregas, {
    onDelete: 'CASCADE',
    eager: true,
  })
  solicitud: Solicitud;
}
