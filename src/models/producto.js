const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Producto', productoSchema);