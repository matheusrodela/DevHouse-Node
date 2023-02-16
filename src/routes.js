import { Router }  from 'express';

import SessionControllers from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const routes = new Router();

routes.post('/sessions', SessionControllers.store);

routes.post('/houses', HouseController.store);

export default routes;