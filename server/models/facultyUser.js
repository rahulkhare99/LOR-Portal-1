const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const { userSchema } = require("./user");
const { applicationSchema } = require("./application");

const facultyUserSchema = new mongoose.Schema({
    info: {
        type: userSchema,
        ref: "User",
        required: true,
    },
    facultyRegNo: {
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

const FacultyUser = mongoose.model("FacultyUser", facultyUserSchema);

function validateFacultyUser(facultyUser) {
    const schema = {
        info: Joi.object(userSchema).required(),
        facultyRegNo: Joi.string().required(),
        applications: Joi.array().required(),
    };
    return Joi.validate(facultyUser, schema);
}

exports.FacultyUser = FacultyUser;
exports.facultyUserSchema = facultyUserSchema;
exports.validateFacultyUser = validateFacultyUser;
