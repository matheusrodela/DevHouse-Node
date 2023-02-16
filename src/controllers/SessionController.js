import User  from '../models/User';
    //importa User do model Users e permite que a aplicação crie, edite e apague usuários.

class SessionController{
    async store(req, res){
        //busca o email do body
        const email = req.body.email;
        
        //usa o email buscado para criar usuário no BD
        //let user = await User.create({ email: email });

        //verifica se o usuário já existe
        let user = await User.findOne({ email: email });

        //se não existe é criado
        if(!user){ 
            user = await User.create({ email: email })
        }

        //Se existir retorna o usuário criado
        return res.json( user );
    }
}

export default new SessionController();