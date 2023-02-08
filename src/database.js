const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
    .then(db => console.log('db conectada'))
    .catch(err=>console.log('ERROR DE CONEXION:::', err))


module.exports=mongoose