import { AreaResponsableRepository } from '../../repositories/area-responsable.repository';
import { AreaResponsable } from '../../entities/area-responsable.entity';

export const updateAreaResponsable = async (
  id: number,
  data: Partial<Omit<AreaResponsable, 'id'>>,
  repository: AreaResponsableRepository
) => {
  return await repository.update(id, data);
};
