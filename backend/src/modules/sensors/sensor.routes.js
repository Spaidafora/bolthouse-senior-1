import express from 'express';
import * as sensorController from './sensor.controller.js';

const router = express.Router();

router.get('/tractor/:tractorId', sensorController.getSensorsByTractorId);
router.get('/:id', sensorController.getSensorById);

export default router;
