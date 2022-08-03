import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';

import routes from 'Routes/index';

dotenvConfig({ path: '.env' });

const { HOST = 'localhost', PORT = 8080 } = process.env;

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(
    express.urlencoded({
        limit: '30mb',
        extended: true,
    })
);
app.use(cors());
app.use(routes);

mongoose
    .connect('mongodb://mongo:27017', { retryWrites: true })
    .then(() => {
        console.log('mongoDB connected');
        app.listen(8005, '0.0.0.0', () => console.log(`server running on:${HOST}:${PORT}`));
    })
    .catch((error) => {
        console.error(error.message);
    });
