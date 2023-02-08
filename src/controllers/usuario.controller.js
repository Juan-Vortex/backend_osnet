const usuarioSchema = require('../models/usuario')
const jwt = require('jsonwebtoken')

const usuarioConstructor={}


usuarioConstructor.login=(req, res)=>{
    const {correo, contrasena} = req.body
    usuarioSchema.findOne({ correo: correo, contrasena: contrasena})
        .then((data) => {
            if (data !== null) {
                let rol = data.rol
                jwt.sign({data}, 'secretkey', (err, token) => {
                    res.json({token, rol})
                })
            }else{
                const msgErr = "Error de credenciales"
                res.json({message:msgErr})
            }
        })
        .catch((error) => res.json({message:error}))
}

usuarioConstructor.listarUsuarios=(req, res)=>{
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

usuarioConstructor.obtenerUsuario=(req, res)=>{
    const {id} = req.params
    usuarioSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

usuarioConstructor.crearUsuario=(req, res)=>{
    const usuarioCreado = usuarioSchema(req.body);
    usuarioCreado.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

usuarioConstructor.actualizarUsuario=(req, res)=>{
    const {id} = req.params
    const {nombre, correo, contrasena, rol} = req.body
    usuarioSchema.updateOne({_id:id}, { $set:{nombre, correo, contrasena, rol} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

usuarioConstructor.eliminarUsuario=(req, res)=>{
    const {id} = req.params
    usuarioSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

module.exports=usuarioConstructor