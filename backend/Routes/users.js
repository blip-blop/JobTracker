const express = require("express");
const userSchema = require("../Models/user");

const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const newUser = new userSchema({
            ...req.body
        });
        await newUser.save();
        res.status(200).send({
            msg: "User added with success",
            newUser
        });
    } catch (err) {
        res.status(402).send({
            msg: "Can not add user",
            err
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await userSchema.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({
            msg: "Server error",
            error
        });
    }
});

module.exports = router;