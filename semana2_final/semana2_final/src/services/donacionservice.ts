import { AppDataSource } from "../data-source";
import { Donacion } from "../entities/Donacion";

const repo = AppDataSource.getRepository(Donacion);

export const DonacionService = {
  getAll: () => repo.find({ relations: ["tipo"] }),
  getById: (id: number) => repo.findOne({ where: { id }, relations: ["tipo"] }),
  create: (data: Donacion) => repo.save(data),
  update: (id: number, data: Partial<Donacion>) => repo.update(id, data),
  delete: (id: number) => repo.delete(id)
};
