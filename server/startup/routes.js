const users = require("../routes/users");
const express = require("express");

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use("/api/users", users);
};
