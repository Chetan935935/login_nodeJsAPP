const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = {
  users: {
    type: Schema.Types.Mixed,
  },
  userNamePasswordMapping: {
    type: Schema.Types.Mixed,
  },
};

module.exports =  mongoose.model("User", userSchema);