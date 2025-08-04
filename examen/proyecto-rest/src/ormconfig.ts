import { DataSource } from 'typeorm';
import { Persona } from './persona/persona.entity';
import { TipoUsuario } from './persona/tipousuario.entity';

export default new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Persona, TipoUsuario],
  synchronize: true,
});
