import { Router } from 'express';
import { findAll, create } from '../controllers/service.controller';
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Service:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The service name
 *      required:
 *        - name
 *      example:
 *        name: Cirugia Hombres
 *        campus_id: 1  
 */


/**
 * @swagger
 * /api/services:
 *  get:
 *    summary: return all services
 *    tags: [Service]
 *    responses:
 *      200:
 *        description: all services
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/Service'
 */

router.get('/', findAll);
router.post('/', create);

export default router;
