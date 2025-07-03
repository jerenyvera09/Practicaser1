import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Solicitud } from 'src/solicitud/entities/solicitud.entity';

@ObjectType()
@Entity({ name: 'entrega' })
export class Entrega {
@Field(() => ID)
@PrimaryGeneratedColumn('uuid')
id_entrega: string;

@Field(() => Int)
@Column()
id_donacion: number;

@Field()
@Column({ type: 'date' })
fecha_entrega: string;

@Field()
@Column()
observacion: string;

@Field(() => Solicitud)
@ManyToOne(() => Solicitud, (solicitud) => solicitud.entregas, { eager: true })
solicitud: Solicitud;
}