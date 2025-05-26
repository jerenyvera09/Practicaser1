import { AppDataSource } from "../data-source";
import { TipoDonacion } from "../entities/TipoDonacion";

const repo = AppDataSource.getRepository(TipoDonacion);

export const TipoDonacionService = {
  getAll: () => repo.find(),
  getById: (id: number) => repo.findOneBy({ id }),
  create: (data: TipoDonacion) => repo.save(data),
  update: (id: number, data: Partial<TipoDonacion>) => repo.update(id, data),
  delete: (id: number) => repo.delete(id)
};
