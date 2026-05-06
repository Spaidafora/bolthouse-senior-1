import express from 'express';
import * as userController from './user.controller.js';

const router = express.Router();

router.get('/', userController.getUserByEmail);
router.get('/:id', userController.getUserById);

export default router;
