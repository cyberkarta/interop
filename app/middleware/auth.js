module.exports = {
    isLoginAdmin : (req, res, next)=>{
        if(req.session.user === null || req.session.user === undefined){
            console.log("Silahkan Login")
            res.redirect('/')
        }else{next()}
    }
}