import express from 'express';
import * as fieldController from './field.controller.js';

const router = express.Router();

router.get('/', fieldController.getFields);
router.get('/:id', fieldController.getFieldById);

export default router;
