import express from 'express';
import * as sessionController from './session.controller.js';

const router = express.Router();

router.get('/', sessionController.getSessions);
router.get('/active', sessionController.getActiveSession);
router.get('/:id', sessionController.getSessionById);
router.get('/:id/gps', sessionController.getSessionGps);
router.get('/:id/seed-timeline', sessionController.getSeedTimeline);
router.get('/:id/heatmap', sessionController.getHeatmap);
router.get('/:id/row-summary', sessionController.getRowSummary);

export default router;
