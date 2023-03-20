const mongoose = require("mongoose");

const User = require("../models/user-data");

const postUserData = async (req, res) => {
  const usersTotelData = await User.find();
  const userEmailAddress = req.body.email;
  const userName = req.body.userName;
  const userMobileNo = req.body.mobile;
  const userPassword = req.body.password;
  const newUserEmailObject = {};
  const newUserMappingObject = {};

  //new object creation
  newUserEmailObject[userEmailAddress] = {
    userName: userName,
    email: userEmailAddress,
    mobile: userMobileNo,
    password: userPassword,
  };
  newUserMappingObject[userName] = userPassword;
  if (!usersTotelData.length) {
    // creating a new object if there is none
    User.insertMany([
      {
        users: newUserEmailObject,
        userNamePasswordMapping: newUserMappingObject,
      },
    ])
      .then((response) => {
        response.status(200).json({
          status: "success",
          description: "User succefully signed Up",
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: "success",
          description: "Something went wronge",
        });
      });
  } else if (usersTotelData[0].users[userEmailAddress]) {
    res.status(200).json({
      status: "fail",
      description: "Email address is already taken",
    });
  } else if (usersTotelData[0].userNamePasswordMapping[userName]) {
    res.status(200).json({
      status: "fail",
      description: "User name is already taken",
    });
  } else if (
    !usersTotelData[0].users[userEmailAddress] &&
    !usersTotelData[0].userNamePasswordMapping[userName]
  ) {
    const updatingUsersObject = {
      ...usersTotelData[0].users,
      ...newUserEmailObject,
    };
    const updatingMappingObject = {
      ...usersTotelData[0].userNamePasswordMapping,
      ...newUserMappingObject,
    };
    // updating the object with new data
    User.updateOne({
      $set: {
        users: updatingUsersObject,
        userNamePasswordMapping: updatingMappingObject,
      },
    }).then((err, res3) => {
      res.status(200).json({
        status: "success",
        description: "User succefully signed Up",
      });
    });
  }
};

module.exports = { postUserData };
