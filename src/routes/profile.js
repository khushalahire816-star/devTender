const express = require("express");
const {userAuth } = require("../middelwares/auth");

const profileRouter = express.Router();

profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    
  //console.log(_id);
    res.send(user);
    
  } catch (err) {
    res.status(400).send("Error" + err.message);
  }
})


module.exports = profileRouter;