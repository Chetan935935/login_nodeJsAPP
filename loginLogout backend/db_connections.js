const express = require("express");
const userRouter = require("./routes/login");
const signInRouter = require("./routes/sign-up");
const cors = require("cors");
const port = 3000;
const app = express();
require("./config/db");
var bodyParser = require("body-parser"); // for hetting data from post request as "req.body"
const { request } = require("https");
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/login", userRouter);
app.use("/api/signUp", signInRouter);

app.use("/api", (req, res, next) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("SERVER IS LIVE!!!!!");
});
