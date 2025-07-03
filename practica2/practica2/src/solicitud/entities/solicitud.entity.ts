import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Receptor } from 'src/receptor/entities/receptor.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';

@ObjectType()
@Entity({ name: 'solicitud' }) // opcional: nombre de la tabla
export class Solicitud {
@Field(() => ID)
@PrimaryGeneratedColumn('uuid')
id_solicitud: string;

@Field()
@Column()
tipo_solicitud: string;

@Field()
@Column({ type: 'date' })
fecha_solicitud: string;

@Field()
@Column()
estado: string;

@Field()
@Column()
descripcion: string;

@Field(() => Receptor)
@ManyToOne(() => Receptor, (receptor) => receptor.solicitudes, { eager: true })
receptor: Receptor;

@Field(() => [Entrega], { nullable: true })
@OneToMany(() => Entrega, (entrega: Entrega) => entrega.solicitud)
entregas: Entrega[];
}