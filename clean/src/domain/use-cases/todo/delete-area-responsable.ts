import { AreaResponsableRepository } from '../../repositories/area-responsable.repository';

export const deleteAreaResponsable = async (
  id: number,
  repository: AreaResponsableRepository
): Promise<void> => {
  await repository.delete(id);
};

