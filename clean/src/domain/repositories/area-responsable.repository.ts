import { AreaResponsable } from '../entities/arearesponsable.entity';

export interface AreaResponsableRepository {
  create(data: Omit<AreaResponsable, 'id'>): Promise<AreaResponsable>;
  findAll(): Promise<AreaResponsable[]>;
  update(id: number, data: Partial<Omit<AreaResponsable, 'id'>>): Promise<AreaResponsable | null>;
  delete(id: number): Promise<void>;
}
