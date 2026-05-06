import express from 'express';
import * as tractorController from './tractor.controller.js';

const router = express.Router();

router.get('/', tractorController.getTractors);
router.get('/:id', tractorController.getTractorById);

export default router;
