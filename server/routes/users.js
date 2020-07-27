const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User, validateUser } = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }

        let newUser = await User.findOne({ email: req.body.email });
        if (newUser) return res.status(400).send("User already registered.");

        newUser = new User(
            _.pick(req.body, [
                "email",
                "password",
                "name",
                "department",
                "type",
            ])
        );

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        await newUser.save();
        res.send(newUser);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
