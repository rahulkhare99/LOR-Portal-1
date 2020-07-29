const express = require("express");
const router = express.Router();
const { StudentUser, validateStudentUser } = require("../models/studentUser");
const { Application } = require("../models/application");

router.get("/", async (req, res) => {
    try {
        const students = await StudentUser.find();
        res.send(students);
    } catch (error) {
        console.log("Error occurred: ", error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const student = await StudentUser.findById(req.params.id);
        if (!student) {
            res.status(404).send("Student not found");
            return;
        }
        res.send(student);
    } catch (error) {
        console.log("Error occurred: ", error);
    }
});

router.post("/studentId", async (req, res) => {
    const { error } = validateStudentUser(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const applications = await Application.find({
        "student._id": req.params.studentId,
    });

    const student = new StudentUser({
        info: req.body.info,
        regNo: req.body.regNo,
        applications: req.body.applications,
    });
});
