// Caso não use Sucrase é necessário importar assim
// const express = require('express');
// const routes = require('./routes');

import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{

    constructor(){
        this.server = express(); //this faz referência ao App

        mongoose.connect('mongodb+srv://MrDev:devhouse@devhouse.unbli7h.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useunifiedTopology: true,
        })

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

//Cria nova instancia e exporta o server sem usar Sucrase
//module.exports = new App().server;

export default new App().server;