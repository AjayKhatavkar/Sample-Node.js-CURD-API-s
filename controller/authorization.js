import express from "express";
import db from "../db/database";
import Auth from "../model/auth_model";
import config from "../config/config";
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const router = express.Router();

router.post("/login", (req, res, next) => {
    let user = new Auth(req.body)

    db.query(user.getUserByIdSQL(), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {
                var Id = data[0].Id;
                var token = jwt.sign({ id: Id }, config.secret, {
                    expiresIn: 600   // expires in 10 minutes
                });
                data[0].token = token
                res.status(200).send({ auth: true, data: data[0], message: "User Login Successful" });
            }
            else {
                res.status(200).json({
                    message: "Invalid Email Id & Password"
                });
            }
        }
        else {
            res.status(200).json({
                message: "User Not Found"
            });
        }
    });
});

module.exports = router;