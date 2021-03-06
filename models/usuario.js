const {Schema,model} = require('mongoose');

const usuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es requerido']
    },
    correo:{
        type: String,
        required:[true,'El correro es requerido'],
        unique: true
    },
    password:{
        type: String,
        required:[true,'La contrasenia es requerida']
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required:[true,'El rol es requerido'],
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});
usuarioSchema.methods.toJSON = function(){
    const {__v,password,_id, ...usuario } = this.toObject();
     usuario.uid= _id;
    return usuario;
}

module.exports = model('Usuario',usuarioSchema);