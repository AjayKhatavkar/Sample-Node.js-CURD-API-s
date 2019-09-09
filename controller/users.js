import express from "express";
import db from "../db/database";
import User from "../model/user";

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(User.getAllUserSQL(), (err, data) => {
        if (!err) {
            res.status(200).json({
                message: "Users listed.",
                Userdata: data
            });
        }
    });
});


router.post("/add", (req, res, next) => {
    let user = new User(req.body);

    db.query(user.addUserSQL(), (err, data) => {
        if (!err) {
            res.status(200).json({
                message: "User added.",
                Id: data.insertId
            });
        }else{
            res.status(200).json({
                message: user
            });
        }
    });
});


router.get("/:Id", (req, res, next) => {
    let uid = req.params.Id;
  
    db.query(User.getUserByIdSQL(uid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {

                res.status(200).json({
                    message: "User Record Found..",
                    user: data
                });
            } else {
                res.status(200).json({
                    message: "User Not found."
                });
            }
        }
    });
});

router.put("/:Id", (req, res, next) => {

    var uid = req.params.Id;
    let user = new User(req.body);

    db.query(User.updateUserByIdSQL(uid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `User updated`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message: "User Not updated."
                });
            }
        }
    });
});    

router.delete("/:Id", (req, res, next) => {

    var uid = req.params.Id;

    db.query(User.deleteUserByIdSQL(uid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `User deleted with id = ${uid}!`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message: "User Not found."
                });
            }
        }
    });
});

module.exports = router;