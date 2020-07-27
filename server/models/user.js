const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
    },
    department: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
        },
        function (email, password, done) {
            User.findOne({ email: email }, function (err, user) {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, {
                        message: "Invalid Email.",
                    });
                }

                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: "Invalid Password",
                    });
                }
                return done(null, user);
            });
        }
    )
);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(50).required(),
        password: Joi.string().required().min(5).max(100),
        type: Joi.string().required(),
        department: Joi.string().required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.userSchema = userSchema;
exports.validateUser = validateUser;
