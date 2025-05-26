import { AppDataSource } from "../data-source";
import { AreaResponsable } from "../entities/AreaResponsable";

const repo = AppDataSource.getRepository(AreaResponsable);

export const AreaResponsableService = {
  getAll: () => repo.find(),
  getById: (id: number) => repo.findOneBy({ id }),
  create: (data: AreaResponsable) => repo.save(data),
  update: (id: number, data: Partial<AreaResponsable>) => repo.update(id, data),
  delete: (id: number) => repo.delete(id)
};
