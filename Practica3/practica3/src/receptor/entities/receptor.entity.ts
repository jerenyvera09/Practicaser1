import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Solicitud } from '../../solicitud/entities/solicitud.entity';

@Entity('receptor')
export class Receptor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  telefono: string;

  // Relación con Solicitud
  @OneToMany(() => Solicitud, (solicitud) => solicitud.receptor)
  solicitudes: Solicitud[];
}
