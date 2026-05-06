import express from 'express';
import * as edgeDeviceController from './edgeDevice.controller.js';

const router = express.Router();

router.get('/tractor/:tractorId', edgeDeviceController.getEdgeDevicesByTractorId);
router.get('/:id', edgeDeviceController.getEdgeDeviceById);

export default router;
