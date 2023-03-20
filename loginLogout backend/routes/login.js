const express = require("express");
const loginRoute = express.Router();

const { checkIfUserPresent } = require("../controllers/login");

loginRoute.post("/isUserPresent", checkIfUserPresent);

module.exports = loginRoute;
