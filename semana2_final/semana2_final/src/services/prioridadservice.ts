import { AppDataSource } from "../data-source";
import { Prioridad } from "../entities/Prioridad";

const repo = AppDataSource.getRepository(Prioridad);

export const PrioridadService = {
  getAll: () => repo.find(),
  getById: (id: number) => repo.findOneBy({ id }),
  create: (data: Prioridad) => repo.save(data),
  update: (id: number, data: Partial<Prioridad>) => repo.update(id, data),
  delete: (id: number) => repo.delete(id)
};
