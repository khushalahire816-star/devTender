const express = require("express");
const {userAuth } = require("../middelwares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  res.send(user.firstName + " send request successfully..");
})

module.exports = requestRouter;