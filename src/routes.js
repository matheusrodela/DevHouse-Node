const { Router } = require('express'); //Importamos só o router e não o express inteiro é um arquivo que vai trabalhar só com rotas

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ ok: true });
});

module.exports = routes;