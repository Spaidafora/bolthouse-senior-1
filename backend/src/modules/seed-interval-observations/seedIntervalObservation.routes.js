import express from 'express';
import * as seedController from './seedIntervalObservation.controller.js';

const router = express.Router();

router.post('/', seedController.ingestSeed);

export default router;
