const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/sampleDatabase")
  .then(() => {
    console.log("We are connected!!!!!");
  })
  .catch((err) => {
    console.log("Error Accoured", err);
  });
