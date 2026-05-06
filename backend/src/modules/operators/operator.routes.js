import express from 'express';
import * as operatorController from './operator.controller.js';

const router = express.Router();

router.get('/', operatorController.getOperators);
router.get('/:id', operatorController.getOperatorById);

export default router;
