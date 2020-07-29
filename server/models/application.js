const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const { facultyUserSchema } = require("../models/facultyUser");
const { studentUserSchema } = require("../models/studentUser");

const applicationSchema = new mongoose.Schema({
    faculty: {
        type: facultyUserSchema,
        ref: "FacultyUser",
        required: true,
    },
    student: {
        type: studentUserSchema,
        ref: "StudentUser",
        required: true,
    },
    facultyDepartment: {
        // TODO: replace with teacherUser
        type: String,
        required: true,
    },
    studentDepartment: {
        // TODO: replace with studentUser
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

const Application = mongoose.model("Application", applicationSchema);

function validateApplication(application) {
    const schema = {
        faculty: Joi.string().required(),
        student: Joi.string().required(),
        facultyDepartment: Joi.string().required(),
        studentDepartment: Joi.string().required(),
        status: Joi.string().required(),
    };
    return Joi.validate(application, schema);
}

exports.Application = Application;
exports.validateUser = validateApplication;
exports.applicationSchema = applicationSchema;
