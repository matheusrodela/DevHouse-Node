//Sem Sucrase
// const { Router } = require('express'); //Importamos só o router e não o express inteiro é um arquivo que vai trabalhar só com rotas

import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ ok: false });
});

//Sem sucrase
//module.exports = routes;

export default routes;