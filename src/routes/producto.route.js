const middlewareJWT = require('../middlewares/middleware.jwt')
const {Router} = require('express')
const route = Router()
const ProductoConstructor = require('../controllers/producto.controller')


route.get('/listar', middlewareJWT.verifyToken, ProductoConstructor.listarProductos)
route.get('/:id', middlewareJWT.verifyToken, ProductoConstructor.obtenerProducto)
route.post('/', middlewareJWT.verifyToken, ProductoConstructor.crearProducto)
route.put('/:id', middlewareJWT.verifyToken, ProductoConstructor.actualizarProducto)
route.delete('/:id', middlewareJWT.verifyToken, ProductoConstructor.eliminarProducto)


module.exports = route