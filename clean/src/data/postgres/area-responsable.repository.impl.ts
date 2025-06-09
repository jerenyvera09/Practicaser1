import { PrismaClient } from '@prisma/client';
import { AreaResponsable } from '../../../domain/entities/area-responsable.entity';
import { AreaResponsableRepository } from '../../../domain/repositories/area-responsable.repository';

const prisma = new PrismaClient();

export class AreaResponsableRepositoryImpl implements AreaResponsableRepository {
  async create(data: Omit<AreaResponsable, 'id'>): Promise<AreaResponsable> {
    const newArea = await prisma.areaResponsable.create({ data });
    return newArea;
  }

  async findAll(): Promise<AreaResponsable[]> {
    return await prisma.areaResponsable.findMany();
  }

  async update(id: number, data: Partial<Omit<AreaResponsable, 'id'>>): Promise<AreaResponsable | null> {
    return await prisma.areaResponsable.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.areaResponsable.delete({ where: { id } });
  }
}
