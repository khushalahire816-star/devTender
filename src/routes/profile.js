const express = require("express");
const { userAuth } = require("../middelwares/auth");
const { validateInputUserData } = require("../utils/validates");
const User = require("../models/user");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    
  //console.log(_id);
    res.send(user);
    
  } catch (err) {
    res.status(400).send("Error" + err.message);
  }
})

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateInputUserData(req)) {
      throw new Error("These fields are not allowed to edit profile.");
    }

    const loggedUser = req.user;

    Object.keys(req.body).forEach(key => (loggedUser[key] = req.body[key]));

    await loggedUser.save();

    res.json({
      message: `${loggedUser.firstName}, your profile edited successfully..`,
      data : loggedUser
    });

    
  } catch (err) {
    res.status(400).send(err.message);
  }
})

profileRouter.get("/feed", async (req, res) => {
  const allData = await User.find({});
  try {
    res.send(allData);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
})


module.exports = profileRouter;