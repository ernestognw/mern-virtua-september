import express from 'express';
import apiRouter from './api';
import allowEveryOrigin from './middlewares/allow-every-origin';

const app = express();

// Static

// Middlewares
app.use(express.json());
app.use(allowEveryOrigin);

// Routes
app.use('/api', apiRouter);
app.use('/static/*', express.static('build/static'));
app.use('*', express.static('build'));

export default app;
