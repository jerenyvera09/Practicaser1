import { AreaResponsable } from '../../entities/area-responsable.entity';
import { AreaResponsableRepository } from '../../repositories/area-responsable.repository';

export const getAreaResponsables = async (
  repository: AreaResponsableRepository
): Promise<AreaResponsable[]> => {
  return repository.findAll();
};
