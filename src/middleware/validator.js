module.exports = (req, res, next) => {
    if(req.query.name){
        let reg = /^[a-zA-Z]+$/
        if(reg.test(req.query.name)){
            next()
        }else{
            next('error')
        }
    }else{
        next('error')
    }
}