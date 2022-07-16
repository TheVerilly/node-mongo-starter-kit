import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';

import routes from 'Routes/index';

dotenvConfig({ path: '.env' });

const { HOST = 'localhost', PORT = 8080, DB_URL, DB_USER, DB_PASSWORD } = process.env;

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
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(PORT, HOST, () => console.log(`server running on host: ${HOST} | port: ${PORT}`));
    })
    .catch((error) => {
        console.error(error.message);
    });
