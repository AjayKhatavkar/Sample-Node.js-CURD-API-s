
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
import config from "./config"

export const  verifyToken = (req, res, next) => {

    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({
            auth: false, message: 'No token provided.'
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: 'Fail to Authentication. Error -> ' + err
            });

        } else {
            next(decoded.id);
        }
	});

}