import express from 'express';
import { getTimestamp } from '../controllers/timestampController.js';

const router = express.Router();

router.get('/:date?', getTimestamp);

export default router;