import express from 'express';
import apiRouter from './api';

const app = express();

// Static

// Middlewares
app.use(express.json());

// Routes
app.use('/api', apiRouter);

export default app;
