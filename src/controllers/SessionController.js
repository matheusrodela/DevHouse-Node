
import User from '../models/User'

class SessionController{

    async store(req, res){
        const { email } = req.body;

        let user = await User.create({ email: email });

        return res.json(user);
    }
    //O método store foi criado e agora pode ser utilizado.

}

export default new SessionController();