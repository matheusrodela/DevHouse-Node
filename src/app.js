import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    constructor(app){
        this.server = express(); //this faz referência ao App

        mongoose.connect('mongodb+srv://MrDev:devhouse@devhouse.unbli7h.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useunifiedtopology: true,
        })

        //chamar métodos. Se não eles não são executados
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

export default new App().server