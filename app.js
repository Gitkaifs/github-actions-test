import express from 'express';
import { Routes } from './user.routes.js';

const app = express();

app.use(express.json());
app.use('/user', Routes);

export default app;