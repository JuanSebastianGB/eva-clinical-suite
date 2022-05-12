import { Router } from 'express';
import { findAll, create } from '../controllers/service.controller';
const router = Router();

router.get('/', findAll);
router.post('/', create);

export default router;
