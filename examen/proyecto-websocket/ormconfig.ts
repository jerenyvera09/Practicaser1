import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: '../../database.sqlite',
  entities: [
    '../../shared-domain/src/entities/*.ts',
  ],
  synchronize: true,
});
