const express = require('express');
const routes = require('./routes');

class App{

    constructor(){
        this.server = express(); //this faz referência ao App

        //vamos chamar os dois métodos para serem utilizados quando o App e construtor forem carregados
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json()); //declara que o servidor usa json
    }

    routes(){
        this.server.use(routes);
    }

}

//Cria nova instancia e exporta o server
module.exports = new App().server;