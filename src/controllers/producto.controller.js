const productoSchema = require('../models/producto')

const productoConstructor={}


productoConstructor.listarProductos=(req, res)=>{
    productoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

productoConstructor.obtenerProducto=(req, res)=>{
    const {id} = req.params
    productoSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

productoConstructor.crearProducto=async(req, res)=>{
    const ProductoCreado = productoSchema(req.body);
    ProductoCreado.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

productoConstructor.actualizarProducto=(req, res)=>{
    const {id} = req.params
    const {nombre, stock} = req.body
    productoSchema.updateOne({_id:id}, { $set:{nombre, stock} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

productoConstructor.eliminarProducto=(req, res)=>{
    const {id} = req.params
    productoSchema.deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
}

module.exports=productoConstructor