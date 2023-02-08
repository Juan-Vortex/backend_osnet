const middlewareJWT = require('../middlewares/middleware.jwt')
const {Router} = require('express')
const route = Router()
const usuarioConstructor = require('../controllers/usuario.controller')


route.post('/login', usuarioConstructor.login)
route.get('/listar', middlewareJWT.verifyToken, usuarioConstructor.listarUsuarios)
route.get('/:id', middlewareJWT.verifyToken, usuarioConstructor.obtenerUsuario)
route.post('/',  usuarioConstructor.crearUsuario)
route.put('/:id', middlewareJWT.verifyToken, usuarioConstructor.actualizarUsuario)
route.delete('/:id', middlewareJWT.verifyToken, usuarioConstructor.eliminarUsuario)


module.exports = route