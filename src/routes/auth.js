const express = require("express");
const { validateSignupData } = require("../utils/validates");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    //validates for data
    validateSignupData(req);

    const { firstName, lastName, email, password } = req.body;

    //encyption of data
    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.send("Database stored successfully..");
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
})

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid Input");
    }

    const correctPassword = await user.validatePassword(password);
    if (correctPassword) {
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 1 * 3600000),
      });
      res.send(user);
    } else {
      throw new Error("Invalide Input");
    }
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout successfully...");
})



module.exports = authRouter;