import { Router } from 'express';
import { AreaResponsableController } from '../controllers/area-responsable/area-responsable.controller';

const router = Router();
const controller = new AreaResponsableController();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
