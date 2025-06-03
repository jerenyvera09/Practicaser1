import { AppDataSource } from "../data-source";
import { Recepcion } from "../entities/Recepcion";

const repo = AppDataSource.getRepository(Recepcion);

export const RecepcionService = {
  getAll: () => repo.find({ relations: ["donacion"] }),
  getById: (id: number) => repo.findOne({ where: { id }, relations: ["donacion"] }),
  create: (data: Recepcion) => repo.save(data),
  update: (id: number, data: Partial<Recepcion>) => repo.update(id, data),
  delete: (id: number) => repo.delete(id)
};
