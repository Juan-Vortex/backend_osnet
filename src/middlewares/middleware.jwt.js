const middlewareJWT={}


middlewareJWT.verifyToken=(req, res, next)=>{
    const bearerHeder = req.headers['authorization']
    if (typeof bearerHeder !== 'undefined') {
        const bearerToken = bearerHeder.split(" ")[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}


module.exports=middlewareJWT