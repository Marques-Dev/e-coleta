import { Router } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const route = Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

route.get('/items', itemsController.index);

route.post('/points', pointsController.create);
route.get('/points', pointsController.index);
route.get('/points/:id', pointsController.show);

export default route;
