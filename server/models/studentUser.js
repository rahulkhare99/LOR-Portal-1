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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application",
        },
    ],
});

const StudentUser = mongoose.model("StudentUser", studentUserSchema);

function validateStudentUser(studentUser) {
    const schema = Joi.object({
        info: Joi.object(userSchema).required("User is required"),
        regNo: Joi.string().required(),
        applications: Joi.array(),
    });
    return schema.validate(studentUser);
}

exports.StudentUser = StudentUser;
exports.studentUserSchema = studentUserSchema;
exports.validateStudentUser = validateStudentUser;
