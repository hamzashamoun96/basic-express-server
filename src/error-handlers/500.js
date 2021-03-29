'use strict';
module.exports = (err, req, res, next) => {
    res.status(500);
    res.json({
        message:"500",
        route: req.path,
    })
}