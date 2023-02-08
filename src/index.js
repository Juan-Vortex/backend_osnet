const morgan = require('morgan')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
require('./database')
require('dotenv').config()

const app = express()
app.set('Port', 4000)


//configuramos las cors
app.use(cors({
    origin: process.env.URL_FRONT
}))


// app.use(morgan('dev'))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


//Rutas
app.use('/api/usuario/', require('./routes/usuario.route'))
app.use('/api/producto/', require('./routes/producto.route'))


//start
app.listen(app.get('Port'), ()=> {
    console.log('escuchando por el puerto: ', app.get('Port'));
})
