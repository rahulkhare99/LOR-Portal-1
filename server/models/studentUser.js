const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const { userSchema } = require("./user");
const { applicationSchema } = require("./application");

const studentUserSchema = new mongoose.Schema({
    info: {
        type: userSchema,
        ref: "User",
        required: true,
    },
    regNo: {
        type: String,
        required: true,
    },
    applications: [
        {
            type: applicationSchema,
            ref: "Application",
        },
    ],
});

const StudentUser = mongoose.model("StudentUser", studentUserSchema);

function validateFacultyUser(facultyUser) {
    const schema = {
        info: Joi.object(userSchema).required(),
        teacherId: Joi.string().required(),
        applications: Joi.array().required(),
    };
    return Joi.validate(facultyUser, schema);
}

exports.FacultyUser = FacultyUser;
exports.facultyUserSchema = studentUserSchema;
exports.validateFacultyUser = validateFacultyUser;
