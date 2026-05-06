import express from 'express';
import * as gpsController from './gpsTelemetryObservation.controller.js';

const router = express.Router();

router.post('/', gpsController.ingestGps);

export default router;
