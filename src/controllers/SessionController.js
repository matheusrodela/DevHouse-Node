import * as Yup from "yup";
import User from "../models/User";
// importa User do model Users e permite que a aplicação crie, edite e apague usuários.

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        });

        // busca o email do body
        const { email } = req.body;

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: "Digite um email válido para logar." });
        }

        // usa o email buscado para criar usuário no BD
        // let user = await User.create({ email: email });

        // verifica se o usuário já existe
        let user = await User.findOne({ email });

        // se não existe é criado
        if (!user) {
            user = await User.create({ email });
        }

        // Se existir retorna o usuário criado
        return res.json(user);
    }
}

export default new SessionController();
