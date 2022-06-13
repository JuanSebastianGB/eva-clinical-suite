import { Router } from 'express';
import {
  findAll,
  create,
  findOne,
  update,
  _delete,
} from '../controllers/service.controller';
const router = Router();

router.get('/', findAll);
router.post('/', create);
router.get('/:id', findOne);
router.put('/:id', update);
router.delete('/:id', _delete);

export default router;
