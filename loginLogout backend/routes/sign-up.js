const express = require("express");
const signInRoute = express.Router();

const { postUserData } = require("../controllers/sign-up");

signInRoute.post("/AddData", postUserData);

module.exports = signInRoute;
