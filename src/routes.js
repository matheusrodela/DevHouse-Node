//Sem Sucrase
// const { Router } = require('express'); //Importamos só o router e não o express inteiro é um arquivo que vai trabalhar só com rotas

import { Router } from 'express';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);


//Sem sucrase
//module.exports = routes;

export default routes;