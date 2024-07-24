import express from 'express';
export const app = express();

app.use(express.json())

import router from './routes/index';
app.use('/', router);
