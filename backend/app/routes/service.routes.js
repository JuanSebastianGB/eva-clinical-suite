import { Router } from 'express';
import { findAll, create, findOne, update, _delete } from '../controllers/service.controller';
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

/**
 * @swagger
 * /api/services:
 *  post:
 *    summary: Create a new Service
 *    tags: [Service]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Service'
 *    responses:
 *      200:
 *        description: new service created
 */
router.post('/', create);

/**
 * @swagger
 * /api/services/{id}:
 *  get:
 *    summary: return one service
 *    tags: [Service]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the service id
 *    responses:
 *      200:
 *        description: one service
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schemas/Service'
 *    404:
 *      description: service not found
 */
router.get("/:id", findOne);

/**
 * @swagger
 * /api/services/{id}:
 *  put:
 *   summary: update a service
 *   tags: [Service]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: the service id
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           $ref: '#/components/schemas/Service'
 *   responses:
 *     200:
 * 			description: service updated
 *     400:
 *      description: cannot be updated
 */
router.put("/:id", update);

/**
 * @swagger
 * /api/services/{id}:
 * 	delete:
 *   summary: delete a service
 *    tags: [Service]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: the service id
 *   responses:
 *     200:
 *       description: deleted successfully
 *     400:
 *       description: service not found
 */
router.delete("/:id", _delete);

export default router;
