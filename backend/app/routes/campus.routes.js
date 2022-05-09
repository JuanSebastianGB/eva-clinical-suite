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

// Create a new Campus
router.post("/", create);

// Retrieve all Campuses
router.get("/", findAll);

// Retrieve all published Campuses
router.get("/published", findAllPublished);

// Retrieve a single Campus with id
router.get("/:id", findOne);

// Update a Campus with id
router.put("/:id", update);

// Delete a Campus with id
router.delete("/:id", _delete);

// Delete all Campuses
router.delete("/", deleteAll);

export default router;