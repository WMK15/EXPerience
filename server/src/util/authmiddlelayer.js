const isAuthenticated = (req, res, next) => {
    if (req.session.userId && req.cookies.authenticated){
        return next();
    } else {
      res.status(401).send("Unauthorised");
    }
};

module.exports = isAuthenticated;