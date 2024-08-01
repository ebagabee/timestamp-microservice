import express from 'express';
import timestampRoutes from ('./routes/timestampRoutes');

const app = express();

app.use(express.json());

app.use('/api', timestampRoutes);

export default app;