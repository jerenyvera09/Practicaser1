import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Solicitud } from 'src/solicitud/entities/solicitud.entity';

@ObjectType()
@Entity({ name: 'receptor' }) // ✅ nombre personalizado para la tabla
export class Receptor {
  @Field(() => ID) // ✅ tipo UUID se representa como ID en GraphQL (string)
  @PrimaryGeneratedColumn('uuid') // ✅ usa UUID como tipo
  id_receptor: string;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  cedula: string;

  @Field()
  @Column()
  telefono: string;

  @Field()
  @Column()
  direccion: string;

  @Field()
  @Column()
  correo: string;

  @OneToMany(() => Solicitud, (solicitud) => solicitud.receptor)
  solicitudes: Solicitud[];
}
