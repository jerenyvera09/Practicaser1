import { Request, Response } from 'express';
import { AreaResponsableRepositoryImpl } from '../../../data/postgres/area-responsable.repository.impl';
import { createAreaResponsable } from '../../../domain/use-cases/area-responsable/create-area-responsable';
import { getAllAreaResponsable } from '../../../domain/use-cases/area-responsable/get-all-area-responsable';
import { updateAreaResponsable } from '../../../domain/use-cases/area-responsable/update-area-responsable';
import { deleteAreaResponsable } from '../../../domain/use-cases/area-responsable/delete-area-responsable';

const repository = new AreaResponsableRepositoryImpl();

export class AreaResponsableController {
  async create(req: Request, res: Response) {
    const data = req.body;
    const result = await createAreaResponsable(data, repository);
    res.status(201).json(result);
  }

  async getAll(req: Request, res: Response) {
    const result = await getAllAreaResponsable(repository);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await updateAreaResponsable(id, data, repository);
    res.json(result);
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await deleteAreaResponsable(id, repository);
    res.status(204).send();
  }
}

