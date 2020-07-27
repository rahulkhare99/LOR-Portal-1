const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "FacultyUser",
        required: true,
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: "StudentUser",
        required: true,
    },
    teacherDepartment: {
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
        teacher: Joi.string().required(),
        student: Joi.string().required(),
        teacherDepartment: Joi.string().required(),
        studentDepartment: Joi.string().required(),
        status: Joi.string().required(),
    };
    return Joi.validate(application, schema);
}

exports.Application = Application;
exports.validateUser = validateApplication;
exports.applicationSchema = applicationSchema;
