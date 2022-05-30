const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    nombreDeUsuario :{
        type:String,
        required:true,
        unique:true
    },
    clave:{
        type:String,
        required: true
    },
    idEvento:{
        type:String,
        required:true,
    }
    
});

const Usuario = mongoose.model('usuario',userSchema);
module.exports = Usuario;