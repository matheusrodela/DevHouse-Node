import { Router }  from 'express';
import SessionControllers from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionControllers.store);

export default routes;