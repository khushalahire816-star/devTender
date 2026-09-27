const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Welcome to first server of dev tender...");
})

app.get("/profile", (req, res) => {
  res.send("It is GET router...");
})

app.post("/dashboard", (req, res) => {
  res.send("It is POST router...");
})

app.delete("/del", (req, res) => {
  res.send("It is DELETE router..");
})

app.listen(3000, () => {
  console.log("My server is running on 3000 port")
})