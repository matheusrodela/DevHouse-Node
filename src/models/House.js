import { Schema, model } from  'mongoose';

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    //vamos estruturar o user para referenciar ao BD
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User' //refecencia ao model user
    }

});

export default model('House', HouseSchema);