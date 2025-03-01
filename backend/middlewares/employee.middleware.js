
exports.isAdmin = async (req, res, next) => {
    if(req.user.role === 'Admin'){
        next();
    }
    else {
        res.status(401).json({authorized: false});
    }
};