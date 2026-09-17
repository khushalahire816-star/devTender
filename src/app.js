const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Welcome to first server of dev tender...");
})

app.use("/profile", (req, res) => {
  res.send("Hello Guys, I am Khushal Ahire..");
})

app.use("/dashboard", (req, res) => {
  res.send("It is dashboard page")
})

app.use("/", (req, res) => {
  res.send("This page is allow to everyone..");
});

app.listen(3000, () => {
  console.log("My server is running on 3000 port")
})