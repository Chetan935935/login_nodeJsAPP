const mongoose = require("mongoose");

const User = require("../models/user-data");

const checkIfUserPresent = async (req, res) => {
  const usersTotelData = await User.find();
  const userName = req.body.userName;
  const userPassword = req.body.password;
  if (usersTotelData[0].userNamePasswordMapping[userName] == userPassword) {
    res.status(200).json({
      status: "success",
      description: "User is present",
    });
  } else {
    res.status(404).json({
      status: "fail",
      description: "User is not present",
    });
  }
};

module.exports = { checkIfUserPresent };
