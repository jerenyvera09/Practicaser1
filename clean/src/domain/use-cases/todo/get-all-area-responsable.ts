import { AreaResponsableRepository } from '../../repositories/area-responsable.repository';

export const getAllAreaResponsable = async (
  repository: AreaResponsableRepository
) => {
  return await repository.findAll();
};
