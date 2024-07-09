import express from 'express';
const router = express.Router();
import * as OrderController from '../controllers/OrderController.js';

router.post("/AddOrder", OrderController.AddOrder);

export default router;