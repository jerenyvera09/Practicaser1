import { DataSource } from "typeorm";
import { Donacion } from "./entities/Donacion";
import { TipoDonacion } from "./entities/TipoDonacion";
import { Recepcion } from "./entities/Recepcion";
import { Prioridad } from "./entities/Prioridad";
import { AreaResponsable } from "./entities/AreaResponsable";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "jeremy2023@",
  database: "modulo2_db",
  synchronize: true,
  logging: false,
  entities: [Donacion, TipoDonacion, Recepcion, Prioridad, AreaResponsable],
  migrations: [],
  subscribers: [],
});