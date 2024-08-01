import express from 'express';
import timestampRoutes from './routes/timestampRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', timestampRoutes);

export default app;