const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    contrasena: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);