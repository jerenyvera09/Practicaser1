import { AreaResponsable } from '../../entities/area-responsable.entity';
import { AreaResponsableRepository } from '../../repositories/area-responsable.repository';

export const updateAreaResponsable = async (
  id: number,
  data: Partial<Omit<AreaResponsable, 'id'>>,
  repository: AreaResponsableRepository
): Promise<AreaResponsable | null> => {
  return repository.update(id, data);
};

