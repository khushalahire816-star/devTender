const mongoose = require("mongoose");
var validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowcase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new error("This is not valid email id" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new error("This is not valid email id" + value);
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new error("This is not valid gender data..");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://wallpapercave.com/wp/wp1993634.jpg",
    },
    about: {
      type: String,
      default: "This is test of default schema type..",
    },
    skill: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.getJWT = async function () {
  const user = this;

  const token = await jwt.sign({ _id: user._id }, "Dev@Tinder@123", {
    expiresIn: "1d",
  });
  return token;
}

userSchema.method.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;

  const correctPassword = await bcrypt.compare(passwordInputByUser, passwordHash);

  return correctPassword;
}

const User = mongoose.model("User", userSchema);

module.exports = User;