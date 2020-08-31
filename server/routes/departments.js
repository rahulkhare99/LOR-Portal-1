const express = require("express");
const router = express.Router();
const { Department, validateDepartment } = require("../models/department");

router.get("/", async (req, res) => {
    try {
        const departments = await Department.find().sort("name");
        res.send(departments);
    } catch (error) {
        console.log("Error occurred: ", error);
    }
});

router.post("/", async (req, res) => {
    try {
        const { error } = validateDepartment(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }
        const department = new Department({
            name: req.body.name,
        });
        await department.save();
        res.send(department);
    } catch (error) {
        console.log("Error occurred: ", error);
    }
});

module.exports = router;
