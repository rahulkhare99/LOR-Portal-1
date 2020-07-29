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
    regNo: {
        type: String,
        required: true,
    },
    // use .populate() method to get the application details
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application",
        },
    ],
});

const FacultyUser = mongoose.model("FacultyUser", facultyUserSchema);

function validateFacultyUser(facultyUser) {
    const schema = Joi.object({
        info: Joi.object(userSchema).required(),
        regNo: Joi.string().required(),
        applications: Joi.array().required(),
    });
    return schema.validate(facultyUser);
}

exports.FacultyUser = FacultyUser;
exports.facultyUserSchema = facultyUserSchema;
exports.validateFacultyUser = validateFacultyUser;
