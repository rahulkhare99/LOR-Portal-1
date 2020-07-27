const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Department = mongoose.model("Department", departmentSchema);

function validateDepartment(department) {
    const schema = {
        name: Joi.string().required(),
    };
}

exports.Department = Department;
exports.validateDepartment = validateDepartment;
exports.departmentSchema = departmentSchema;
