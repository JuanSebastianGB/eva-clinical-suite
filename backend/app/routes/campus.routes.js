import {
  create,
  deleteAll,
  findAll,
  findAllPublished,
  findOne,
  update,
  _delete
} from '../controllers/campus.controller.js';
import { Router } from 'express';
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Campus:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The campus name
 *      required:
 *        - name
 *      example:
 *        name: Sede principal
 */

/**
 * @swagger
 * /api/campuses:
 *  post:
 *    summary: Create a new Campus
 *    tags: [Campus]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Campus'
 *    responses:
 *      200:
 *        description: new campus created
 */
router.post("/", create);
/**
 * @swagger
 * /api/campuses:
 *  get:
 *    summary: return all Campuses
 *    tags: [Campus]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/Campus'
 */
router.get("/", findAll);
/**
 * @swagger
 * /api/campuses/{id}:
 *  get:
 *    summary: return one campus
 *    tags: [Campus]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the campus id
 *    responses:
 *      200:
 *        description: one campus
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schemas/Campus'
 *    404:
 *      description: campus not found
 */
router.get("/:id", findOne);
/**
 * @swagger
 * /api/campuses/{id}:
 *  put:
 *    summary: update a campus
 *    tags: [Campus]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the campus id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Campus'
 *    responses:
 *      200:
 *        description: campus updated
 *      400:
 *        cannot be updated
 *      500:
 *        something went wrong
 */
router.put("/:id", update);
/**
 * @swagger
 * /api/campuses/{id}:
 *  delete:
 *    summary: delete a campus
 *    tags: [Campus]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the campus id
 *    404:
 *      description: campus not found
 */
router.delete("/:id", _delete);

// Delete all Campuses
router.delete("/", deleteAll);

export default router;