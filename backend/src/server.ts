import express from 'express';
import route from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

app.use('/assets', express.static(path.resolve(__dirname, '..', 'assets')));

app.listen(8080);
