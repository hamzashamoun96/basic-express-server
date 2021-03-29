module.exports = (req, res, next) => {
    console.log('Request Method', req.method, req.path)
    next()
}