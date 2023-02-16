import { Schema, model }  from 'mongoose';

const UserSchema = new Schema({
    email: String,
})

export default model('User', UserSchema);
    //Exporta o model que importamos e da como parâmetros o nome do Model e qual o Schema desse Model (const criada).