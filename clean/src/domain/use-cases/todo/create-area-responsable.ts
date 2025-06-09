import { AreaResponsable } from '../../entities/arearesponsable.entity';
import { AreaResponsableRepository } from '../../repositories/area-responsable.repository';

export const createAreaResponsable = async (
  data: Omit<AreaResponsable, 'id'>,
  repository: AreaResponsableRepository
): Promise<AreaResponsable> => {
  return repository.create(data);
};
