const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("1st Response");
    next();
  },
  (req, res, next) => {
    console.log("2nd Response.");
    next()
  },
  (req, res, next) => {
    console.log("3rd Response");
    //res.send("This is 3rd Route Handler.")
    next();
  },
  (req, res, next) => {
    console.log("4th Response");
    next();
  },
  (req, res, next) => {
    console.log("5th Response");
    res.send("This is 5th Route Randler.")
  },
);

app.listen(3000, () => {
  console.log("My server is running on 3000 port")
})