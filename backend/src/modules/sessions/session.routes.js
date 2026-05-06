//https://expressjs.com/en/guide/routing.html

import express from 'express';
import { getSessions, getSessionbyId } from '../controllers/session.controller.js';


const router = express.Router();

router.get('/', getSessions)

router.get('/:sessionId', getSessionbyId)


export default router;